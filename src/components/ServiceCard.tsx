import { backgroundImage } from "@/assets";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { Button } from "./Button";

export function ServiceCard() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.card.src})`,
      }}
      className="flex flex-col bg-cover bg-no-repeat h-[300px] items-center justify-evenly"
    >
      <Icon iconName="Md11Mp" />

      <Text preset="heading_sm">Problemas Com Passagens Aéreas</Text>

      <Button title="Quero atendimento" preset="outline" />
    </div>
  );
}
