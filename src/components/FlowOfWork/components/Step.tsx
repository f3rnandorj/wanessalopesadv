import { backgroundImage } from "@/assets";
import { Icon, IconNames, Text, Button } from "@/components";
import { MouseEventHandler } from "react";

export interface StepProps {
  iconName: IconNames;
  title: string;
  description: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Step({ onClick, description, iconName, title }: StepProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.cardHorizontal.src})`,
      }}
      className={`flex flex-1 flex-col bg-cover bg-no-repeat items-center px-10 py-10 text-center gap-4 -mt-1
      md:pt-20 md:h-[450px] md:py-0 
      lg:pt-20 lg:h-[450px] lg:py-0 `}
    >
      <Icon iconName={iconName} className="mb-5" size={50} />

      <Text isBold preset="heading_sm" tag="h2">
        {title}
      </Text>

      <Text preset="small" tag="p" className="mb-4">
        {description}
      </Text>

      {onClick && (
        <Button
          className="w-full"
          title="Agendar Atendimento"
          onClick={onClick}
        />
      )}
    </div>
  );
}
