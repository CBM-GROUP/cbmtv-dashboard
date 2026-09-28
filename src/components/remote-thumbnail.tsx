import Image from "next/image";
import { useEffect, useState } from "react";

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
  borderRadius = 6,
}: RemoteThumbnailProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!isHttpUrl(src) || failed) {
    return (
      <div
        aria-label={src ? `Image unavailable for ${label}` : `No image for ${label}`}
        className="flex shrink-0 items-center justify-center bg-muted text-center text-[11px] text-muted-foreground ring-1 ring-foreground/5"
        style={{ width, height, borderRadius }}
      >
        No image
      </div>
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
      className="shrink-0 object-cover ring-1 ring-foreground/5"
      style={{ width, height, borderRadius }}
    />
  );
}
