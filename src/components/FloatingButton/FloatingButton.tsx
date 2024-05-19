"use client";

import Link from "next/link";
import { Image } from "../Image/Image";
import { utilsImages } from "@/assets";
import { hrefToWpp } from "../Button/Button";
import { useWindowSize } from "@/hooks";

export function FloatingButton() {
  const { width } = useWindowSize();

  const iconSize = width && width >= 640 ? 75 : 60;

  return (
    <Link
      href={hrefToWpp}
      className="fixed bottom-8 right-8 z-100
      md:bottom-12 md:right-12
      lg:bottom-16 lg:right-16"
    >
      <Image
        src={utilsImages.wpp}
        alt=""
        width={iconSize}
        height={iconSize}
        className="rounded-full"
      />
    </Link>
  );
}
