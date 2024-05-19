"use client";

import { backgroundImage, utilsImages } from "@/assets";
import { Image } from "@/components";
import { SwipeButton, swipeButtonDataToMap } from "./components/SwipeButton";

export function NavBar() {
  return (
    <nav
      className={`w-full flex flex-col h-[15rem] justify-evenly items-center px-appPaddingHorizontal
      md:h-[20rem] md:flex-row 
      lg:h-[10.5rem] lg:flex-row lg:px-28
      
      `}
      style={{ backgroundImage: `url(${backgroundImage.header.src})` }}
    >
      <Image
        alt=""
        src={utilsImages.stamp.src}
        height={60}
        width={145}
        className="pt-20 hidden
        md:block
        lg:block"
      />

      <Image alt="logo" src={utilsImages.logo} width={235} height={130} />

      <div
        className="flex justify-center w-full gap-1.5 
        md:w-auto md:flex-col
        lg:w-auto lg:flex-col"
      >
        {swipeButtonDataToMap.map((button) => (
          <SwipeButton key={button.title} {...button} />
        ))}
      </div>
    </nav>
  );
}
