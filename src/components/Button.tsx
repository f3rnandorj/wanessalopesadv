import { Text } from "./Text";

type ButtonVariants = "defaultMain" | "outline";
type ButtonStyles = {
  variants: Record<ButtonVariants, { container: string }>;
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  preset?: ButtonVariants;
}

export function Button({
  title,
  className,
  preset = "defaultMain",
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

  return (
    <button className={`${buttonStyle}`} {...buttonProps}>
      <Text preset="button" className="">
        {title}
      </Text>
    </button>
  );
}
