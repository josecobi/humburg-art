'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  className?: string;
  style?: React.CSSProperties;
  draggable?: boolean;
  unselectable?: 'on' | 'off';
  priority?: boolean;
}

export default function ImageWithSkeleton({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  loading = 'lazy',
  className = '',
  style,
  draggable = false,
  unselectable,
  priority = false,
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-primary-200 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        priority={priority}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        draggable={draggable}
        unselectable={unselectable}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
