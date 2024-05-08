"use client";

import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";

type TextHTMLElement = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

type AllowedTags = "h1" | "h2" | "h3" | "span" | "p";
type HTMLAdaptedProps = Pick<TextHTMLElement, "dangerouslySetInnerHTML">;

interface TextProps extends HTMLAdaptedProps {
  id: string;
  tag?: AllowedTags;
  preset?: TextVariants;
  children?: React.ReactNode;
  className?: string;
  isMedium?: boolean;
  isBold?: boolean;
  isInitialVisible?: boolean;
}

export function Text({
  id,
  tag = "span",
  preset = "paragraph",
  className = "",
  isBold = false,
  isMedium = false,
  children,
  isInitialVisible = false,
  ...textProps
}: TextProps) {
  const [isVisible, setIsVisible] = useState(isInitialVisible);

  const Tag = tag as keyof JSX.IntrinsicElements;

  const fontSize = $fontSizeStyles[preset];
  const fontWeight = getFontWeight(isMedium, isBold);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById(id)?.offsetTop || 0;
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return (
    <motion.text
      className={` ${className} ${fontSize} ${fontWeight} `}
      id={id}
      initial={isVisible ? { opacity: 0.2 } : false}
      animate={{ opacity: isVisible ? 1 : 0.2 }}
      transition={{ duration: 1.5 }}
    >
      <Tag {...textProps}>{children && children}</Tag>
    </motion.text>
  );
}

function getFontWeight(isMedium: boolean, isBold: boolean) {
  switch (true) {
    case isMedium:
      return "font-medium";

    case isBold:
      return "font-bold";

    default:
      return "font-normal";
  }
}

type TextVariants = "paragraph" | "heading" | "small";

export const $fontSizeStyles: Record<TextVariants, string> = {
  heading: " lg:text-6xl text-3xl",
  paragraph: "lg:text-[1.25rem]",
  small: "text-base",
};
