import { Image } from "../Image/Image";
import { utilsImages } from "@/assets";

export function FloatingButton() {
  return (
    <button className="fixed bottom-16 right-16 z-100">
      <Image
        src={utilsImages.wpp}
        alt=""
        width={75}
        height={75}
        className="rounded-full"
      />
    </button>
  );
}
