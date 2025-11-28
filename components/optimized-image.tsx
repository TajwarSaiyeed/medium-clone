"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  fill,
  width,
  height,
}: OptimizedImageProps) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground text-sm">
          Image failed to load
        </span>
      </div>
    );
  }

  return (
    <>
      {loading && <div className={`bg-muted animate-pulse ${className}`} />}
      <Image
        src={src}
        alt={alt}
        className={className}
        fill={fill}
        width={width}
        height={height}
        unoptimized
        loading="lazy"
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};

export default OptimizedImage;
