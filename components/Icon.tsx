"use client";

import { useState } from "react";

interface IconProps {
  src?: string;
  alt: string;
  className?: string;
  fallback?: string | React.ReactNode;
}

const Icon = ({ src, alt, className = "", fallback }: IconProps) => {
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

  // Use img tag for SVGs - simpler and more direct
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
      style={{ display: 'block' }}
    />
  );
};

export default Icon;

