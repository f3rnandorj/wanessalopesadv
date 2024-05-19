import { StaticImageData } from "next/image";
import { Image } from "../Image/Image";
import { Text } from "../Text/Text";
import { socialMedias } from "@/assets";
import Link from "next/link";

export function SocialMedias() {
  return (
    <div className="flex justify-start flex-col space-y-4">
      {mediaDataToMap.map((media) => (
        <Media key={media.title} {...media} />
      ))}
    </div>
  );
}

interface MediaProps {
  src: StaticImageData;
  title: string;
  link: string;
}

function Media({ src, title, link }: MediaProps) {
  return (
    <div className="flex items-center gap-4">
      <Link href={link}>
        <Image src={src} alt={title} width={40} height={40} />
      </Link>

      <Text id={title} tag="p" className="text-center">
        {title}
      </Text>
    </div>
  );
}

const mediaDataToMap: MediaProps[] = [
  {
    src: socialMedias.facebook,
    title: `Siga nossa pagina no facebook`,
    link: "https://www.facebook.com/share/GFZsHaqceTNh228S/?mibextid=LQQJ4d",
  },
  {
    src: socialMedias.instagram,
    title: `Siga nosso instagram`,
    link: "https://www.instagram.com/wanessalopesadvogada?igsh=MjZ0Y2hla2k5bWxh&utm_source=qr",
  },
];
