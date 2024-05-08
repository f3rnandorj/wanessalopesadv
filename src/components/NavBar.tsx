import { backgroundImage, utilsImages } from "@/assets";
import { Image, Text } from "@/components";

export function NavBar() {
  return (
    <nav
      className="w-full flex h-[15rem] justify-evenly items-center
      md:h-[20rem] 
      lg:h-[9.75rem] 
      "
      style={{ backgroundImage: `url(${backgroundImage.header.src})` }}
    >
      <Image
        alt=""
        src={utilsImages.stamp.src}
        height={48}
        width={133}
        className="pt-20"
      />

      <div>
        <Text id="LOGO">LOGO</Text>
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
  swipeId: string;
}

function SwipeButton({ title, swipeId }: SwipeButtonProps) {
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
    swipeId: "",
  },
  {
    title: "Como atuamos",
    swipeId: "",
  },
  {
    title: "Nossos serviços",
    swipeId: "",
  },
];
