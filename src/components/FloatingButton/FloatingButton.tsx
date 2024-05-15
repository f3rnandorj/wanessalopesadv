import Link from "next/link";
import { Image } from "../Image/Image";
import { utilsImages } from "@/assets";
import { hrefToWpp } from "../Button/Button";

export function FloatingButton() {
  return (
    <Link href={hrefToWpp} className="fixed bottom-16 right-16 z-100">
      <Image
        src={utilsImages.wpp}
        alt=""
        width={75}
        height={75}
        className="rounded-full"
      />
    </Link>
  );
}
