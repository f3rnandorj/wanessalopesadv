import { backgroundImage } from "@/assets";
import { Icon, IconNames } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";

interface ServiceCardProps {
  iconName: IconNames;
  description: string;
}

export function ServiceCard({ description, iconName }: ServiceCardProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.cardVertical.src})`,
      }}
      className="flex flex-col bg-cover bg-no-repeat text-center items-center justify-between px-2 min-h-52 w-full
      md:px-4 md:justify-evenly md:h-[300px]
      lg:px-4 lg:justify-evenly lg:h-[300px]"
    >
      <Icon
        iconName={iconName}
        className="mt-4 mb-4
        md:mt-0
        lg:mt-0"
      />

      <Text tag="p" preset="heading_sm" isMedium className="mb-4 text-base">
        {description}
      </Text>

      <Button
        title="Quero atendimento"
        preset="outline"
        className="-mx-2 mb-2"
      />
    </div>
  );
}

export const serviceCardToMap: ServiceCardProps[] = [
  {
    description: "Corte de energia",
    iconName: "corteDeEnergia",
  },
  {
    description: "Atraso de voo / Extravio de bagagem",
    iconName: "atrasoVoo_extravioDeBagagem",
  },
  {
    description: "Nome sujo / Protesto indevivo",
    iconName: "nomeSujo_protestoIndevido",
  },
  {
    description: "Cobranças indevidas",
    iconName: "cobrançaIndevida",
  },
  {
    description: "Problemas com telefonia",
    iconName: "problemasTelefonia",
  },
  {
    description: "Comprou e não recebeu",
    iconName: "comprouNãoRecebeu",
  },
  {
    description: "Multas indevidas",
    iconName: "multasIndevidas",
  },
  {
    description: "Corte ou atraso no restabelecimento de água",
    iconName: "corteOuAtraso",
  },
  {
    description: "Problemas bancários",
    iconName: "problemasBancários",
  },
  {
    description: "Problemas com plano de saúde",
    iconName: "problemasSaúde",
  },
];
