import Image from "next/image";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

function isHttpUrl(value: string | null | undefined) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

type RemoteThumbnailProps = {
  /** May be null/empty/garbage — editors save arbitrary values. */
  src: string | null | undefined;
  /** Used to build the alt text, e.g. the row's title. */
  label: string;
  width?: number;
  height?: number;
  borderRadius?: number;
};

/**
 * Renders a remote image that may point at ANY host.
 *
 * next/image THROWS during render for a hostname missing from next.config.js
 * `remotePatterns`, which takes down the whole surrounding list and never
 * reaches onError. `unoptimized` skips that host check; at thumbnail sizes
 * there is nothing to optimise anyway, and onError still catches real load
 * failures. A missing or non-http src never reaches next/image at all.
 */
export function RemoteThumbnail({
  src,
  label,
  width = 80,
  height = 45,
  borderRadius = 4,
}: RemoteThumbnailProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!isHttpUrl(src) || failed) {
    return (
      <Box
        aria-label={src ? `Image unavailable for ${label}` : `No image for ${label}`}
        sx={{
          width,
          height,
          borderRadius: borderRadius / 4,
          bgcolor: "action.hover",
          color: "text.secondary",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          textAlign: "center",
        }}
      >
        No image
      </Box>
    );
  }

  return (
    <Image
      src={src as string}
      alt={`${label} thumbnail`}
      width={width}
      height={height}
      unoptimized
      onError={() => setFailed(true)}
      style={{ width, height, borderRadius, objectFit: "cover" }}
    />
  );
}
