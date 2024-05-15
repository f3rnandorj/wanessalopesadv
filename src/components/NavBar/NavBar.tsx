"use client";

import { backgroundImage, utilsImages } from "@/assets";
import { Image, MARGIN_HORIZONTAL } from "@/components";
import { SwipeButton, swipeButtonDataToMap } from "./components/SwipeButton";
import { useIsMobileDevice } from "@/hooks";

export function NavBar() {
  const isMobile = useIsMobileDevice();

  return (
    <nav
      className={`w-full flex flex-col h-[15rem] justify-evenly items-center 
      md:h-[20rem] md:flex-row 
      lg:h-[10.5rem] lg:flex-row lg:px-28
      ${MARGIN_HORIZONTAL}
      `}
      style={{ backgroundImage: `url(${backgroundImage.header.src})` }}
    >
      {!isMobile && (
        <Image
          alt=""
          src={utilsImages.stamp.src}
          height={60}
          width={145}
          className="pt-20"
        />
      )}

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
