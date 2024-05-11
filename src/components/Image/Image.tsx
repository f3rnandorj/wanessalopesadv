"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {
  isToScroll?: boolean;
}

export function Image({
  src,
  width,
  height,
  isToScroll = false,
  className,
  ...nextImageProps
}: ImageProps) {
  function scrollToComponent() {
    const element = document.getElementById("checkout");

    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }

  return (
    <NextImage
      className={`${isToScroll ? "cursor-pointer" : ""} ${className}`}
      src={src}
      width={width}
      height={height}
      onClick={isToScroll ? scrollToComponent : undefined}
      {...nextImageProps}
    />
  );
}
