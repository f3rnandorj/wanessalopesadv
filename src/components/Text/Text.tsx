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
  id?: string;
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
  const fontHeight = getFontHeight(preset);

  useEffect(() => {
    if (!id) return;

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
      id={id}
      className={`${fontSize} ${fontWeight} `}
      initial={isVisible ? { opacity: 0.2 } : false}
      animate={{ opacity: isVisible ? 1 : 0.2 }}
      transition={{ duration: 1.5 }}
    >
      <Tag {...textProps} className={`${fontHeight} ${className}`}>
        {children && children}
      </Tag>
    </motion.text>
  );
}

type TextVariants = "paragraph" | "heading" | "heading_sm" | "small" | "button";

function getFontHeight(preset: TextVariants) {
  switch (true) {
    case preset === "heading":
      return "leading-tight";

    case preset === "heading_sm":
      return "";

    case preset === "small":
      return "";

    case preset === "button":
      return "";

    default:
      return "";
  }
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

export const $fontSizeStyles: Record<TextVariants, string> = {
  heading: " lg:text-6xl md:text-6xl text-2xl",
  heading_sm: "lg:text-2xl md:text-2xl text-xl",
  paragraph: "lg:text-[1.25rem]",
  small: "text-base",
  button: "lg:text-base text-sm",
};
