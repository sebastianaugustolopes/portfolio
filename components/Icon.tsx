"use client";

import { useState } from "react";
import Image from "next/image";

interface IconProps {
  src?: string;
  alt: string;
  className?: string;
  fallback?: string | React.ReactNode;
  width?: number;
  height?: number;
}

const Icon = ({ src, alt, className = "", fallback, width, height }: IconProps) => {
  // Extract size from className if width/height not provided
  const sizeMatch = className.match(/(?:w-|h-)(\d+)/);
  const defaultSize = sizeMatch ? parseInt(sizeMatch[1]) * 4 : 24; // Tailwind units (1 = 4px)
  const finalWidth = width || defaultSize;
  const finalHeight = height || defaultSize;
  const [error, setError] = useState(false);

  // If there's no src or an error occurred, show fallback
  if (!src || error) {
    if (fallback) {
      return (
        <span className={className}>
          {typeof fallback === "string" ? fallback : fallback}
        </span>
      );
    }
    return null;
  }

  // Use Next.js Image component for optimized images
  return (
    <Image
      src={src}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      className={className}
      onError={() => setError(true)}
      unoptimized={src.endsWith('.svg')}
      style={{ display: 'block' }}
    />
  );
};

export default Icon;

