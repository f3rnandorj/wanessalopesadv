"use client";

import { Text } from "@/components";

interface SwipeButtonProps {
  title: string;
  elementIdToSwipe: string;
}

export function SwipeButton({ title, elementIdToSwipe }: SwipeButtonProps) {
  function scrollToComponent() {
    const blockPositionScroll: ScrollIntoViewOptions["block"] =
      elementIdToSwipe === "our_services" ? "start" : "center";

    const element = document.getElementById(elementIdToSwipe);

    element?.scrollIntoView({
      behavior: "smooth",
      block: blockPositionScroll,
      inline: "end",
    });
  }

  return (
    <button
      onClick={scrollToComponent}
      className={`flex flex-1  bg-zinc-950 py-1.5 px-2  border-zinc-950 border-[1px] text-zinc-300 hover:link-hover whitespace-nowrap justify-center`}
    >
      <Text id={title} preset="small">
        {title}
      </Text>
    </button>
  );
}

export const swipeButtonDataToMap: SwipeButtonProps[] = [
  {
    title: "Quem sou",
    elementIdToSwipe: "who_i_am",
  },
  {
    title: "Como atuamos",
    elementIdToSwipe: "how_we_act",
  },
  {
    title: "Nossos serviços",
    elementIdToSwipe: "our_services",
  },
];
