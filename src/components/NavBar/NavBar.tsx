"use client";

import { backgroundImage, utilsImages } from "@/assets";
import { Image } from "@/components";
import { SwipeButton, swipeButtonDataToMap } from "./components/SwipeButton";
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

      <Image alt="logo" src={utilsImages.logo} width={235} height={130} />

      <div className="flex flex-col gap-1.5">
        {swipeButtonDataToMap.map((button) => (
          <SwipeButton key={button.title} {...button} />
        ))}
      </div>
    </nav>
  );
}
