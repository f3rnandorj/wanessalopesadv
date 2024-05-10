import { Text } from "./Text";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, className, ...buttonProps }: ButtonProps) {
  const $buttonStyles = {
    container: `min-h-12 bg-red-800 px-8 text-zinc-300 hover:button-hover
    shadow-red-950 shadow-button hover:shadow-none 
    ${className}
    `,
  };

  return (
    <button className={$buttonStyles.container} {...buttonProps}>
      <Text preset="button" className="">
        {title}
      </Text>
    </button>
  );
}
