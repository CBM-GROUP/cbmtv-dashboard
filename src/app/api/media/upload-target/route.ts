import { randomUUID } from "node:crypto";
import { extname, basename } from "node:path";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type MediaType = "image" | "video";

const MEDIA_RULES: Record<
  MediaType,
  { prefix: string; extensions: Set<string>; contentTypes: Set<string> }
> = {
  video: {
    prefix: "cbmvideo",
    extensions: new Set([".mp4", ".m4v", ".mov", ".webm"]),
    contentTypes: new Set(["video/mp4", "video/x-m4v", "video/quicktime", "video/webm"]),
  },
  image: {
    prefix: "cbm-images",
    extensions: new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]),
    contentTypes: new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]),
  },
};

function safeUniqueFilename(filename: string) {
  const originalName = basename(filename.replaceAll("\\", "/"));
  const extension = extname(originalName).toLowerCase();
  const stem = originalName.slice(0, -extension.length).trim();
  const safeStem = stem.replace(/[^A-Za-z0-9._-]+/g, "-").replace(/^[._-]+|[._-]+$/g, "") || "media";
  return `${randomUUID().replaceAll("-", "")}-${safeStem}${extension}`;
}

function requiredEnvironment(name: string) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

async function isAuthenticated(authorization: string) {
  const configuredApiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!configuredApiUrl) throw new Error("Backend API is not configured");

  const response = await fetch(new URL("/api/accounts/profile/", configuredApiUrl), {
    headers: { Authorization: authorization },
    cache: "no-store",
  });
  return response.ok;
}

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Authentication credentials were not provided." }, { status: 401 });
  }

  try {
    if (!(await isAuthenticated(authorization))) {
      return NextResponse.json({ error: "Invalid or expired access token." }, { status: 401 });
    }

    const body = await request.json();
    const filename = typeof body.filename === "string" ? body.filename.trim() : "";
    const contentType = typeof body.content_type === "string" ? body.content_type : "";
    const mediaType = body.media_type as MediaType;
    const rule = MEDIA_RULES[mediaType];

    if (!filename || !rule) {
      return NextResponse.json({ error: "A filename and supported media type are required." }, { status: 400 });
    }

    const extension = extname(basename(filename.replaceAll("\\", "/"))).toLowerCase();
    if (!rule.extensions.has(extension) || !rule.contentTypes.has(contentType)) {
      return NextResponse.json({ error: `Unsupported ${mediaType} file type.` }, { status: 400 });
    }

    const region = process.env.AWS_REGION ?? process.env.AWS_S3_REGION_NAME;
    if (!region) throw new Error("AWS_REGION is not configured");

    const bucket = requiredEnvironment("S3_BUCKET_NAME");
    const cloudFrontBaseUrl = requiredEnvironment("CLOUDFRONT_BASE_URL").replace(/\/+$/, "");
    const generatedFilename = safeUniqueFilename(filename);
    const objectKey = `${rule.prefix}/${generatedFilename}`;
    const deliveryKey = mediaType === "video" ? generatedFilename : objectKey;

    const s3 = new S3Client({
      region,
      credentials: {
        accessKeyId: requiredEnvironment("AWS_ACCESS_KEY_ID"),
        secretAccessKey: requiredEnvironment("AWS_SECRET_ACCESS_KEY"),
      },
    });
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: objectKey,
      ContentType: contentType,
    });
    const expiresIn = Number(process.env.PRESIGNED_URL_TTL ?? 3600);
    const uploadUrl = await getSignedUrl(s3, command, { expiresIn });

    return NextResponse.json({
      upload_url: uploadUrl,
      object_key: objectKey,
      delivery_url: `${cloudFrontBaseUrl}/${deliveryKey}`,
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    console.error("Failed to create media upload target", error);
    return NextResponse.json({ error: "Could not create the upload target." }, { status: 500 });
  }
}
