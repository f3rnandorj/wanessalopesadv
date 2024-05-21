"use client";

import Link from "next/link";
import { Text } from "../Text/Text";

type ButtonVariants = "defaultMain" | "outline";
type ButtonStyles = {
  variants: Record<ButtonVariants, { container: string }>;
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  preset?: ButtonVariants;
  isLink?: boolean;
}

export const hrefToWpp =
  "https://wa.me/5521982180065?text=Ol%C3%A1,%20Dra%20Wanessa%20Lopes,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20atendimento%20para%20esclarecer%20uma%20d%C3%BAvida.";

export function Button({
  title,
  className,
  preset = "defaultMain",
  isLink = true,
  ...buttonProps
}: ButtonProps) {
  const buttonStyles: ButtonStyles = {
    variants: {
      defaultMain: {
        container: `min-h-12 bg-red-800 px-8 text-zinc-300 hover:button-hover
        shadow-red-950 shadow-button hover:shadow-none 
        ${className}
      `,
      },
      outline: {
        container: `min-h-12 bg-zinc-100 px-8 text-zinc-950 hover:button-hover
        shadow-zinc-950 shadow-button hover:shadow-none hover:border-zinc-950 hover:border-[1px] 
        ${className}
      `,
      },
    },
  };

  const buttonStyle = buttonStyles.variants[preset].container;

  if (isLink) {
    return (
      <button className={`${buttonStyle}`}>
        <Link href={hrefToWpp} about="Fale conosco">
          <Text preset="button">{title}</Text>
        </Link>
      </button>
    );
  }

  return (
    <button className={`${buttonStyle}`} {...buttonProps}>
      <Text preset="button">{title}</Text>
    </button>
  );
}
