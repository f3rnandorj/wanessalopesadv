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
      className="flex flex-col bg-cover bg-no-repeat h-[300px] items-center justify-evenly px-4"
    >
      <Icon iconName={iconName} />

      <Text preset="heading_sm" isMedium>
        {description}
      </Text>

      <Button title="Quero atendimento" preset="outline" />
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
