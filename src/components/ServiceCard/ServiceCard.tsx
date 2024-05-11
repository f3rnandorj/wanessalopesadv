import { backgroundImage } from "@/assets";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";

export function ServiceCard() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.cardVertical.src})`,
      }}
      className="flex flex-col bg-cover bg-no-repeat h-[300px] items-center justify-evenly"
    >
      <Icon iconName="analisamos" />

      <Text preset="heading_sm">Problemas Com Passagens Aéreas</Text>

      <Button title="Quero atendimento" preset="outline" />
    </div>
  );
}
