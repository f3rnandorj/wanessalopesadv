import { backgroundImage, utilsImages } from "@/assets";
import { Image, Text } from "@/components";

export function NavBar() {
  return (
    <nav
      className="w-full flex h-[15rem] justify-evenly items-center px-28
      md:h-[20rem] 
      lg:h-[10.5rem] 
      "
      style={{ backgroundImage: `url(${backgroundImage.header.src})` }}
    >
      <Image
        alt=""
        src={utilsImages.stamp.src}
        height={60}
        width={145}
        className="pt-20"
      />

      <div>
        <Text>LOGO</Text>
      </div>

      <div className="flex flex-col gap-1">
        {swipeButtonDataToMap.map((button) => (
          <SwipeButton key={button.title} {...button} />
        ))}
      </div>
    </nav>
  );
}

interface SwipeButtonProps {
  title: string;
}

function SwipeButton({ title }: SwipeButtonProps) {
  //TODO: implement SwipeButton functionality

  return (
    <button className="bg-zinc-950 py-1.5 px-2">
      <Text id={title} preset="small" className="text-zinc-300">
        {title}
      </Text>
    </button>
  );
}

const swipeButtonDataToMap: SwipeButtonProps[] = [
  {
    title: "Quem sou",
  },
  {
    title: "Como atuamos",
  },
  {
    title: "Nossos serviços",
  },
];
