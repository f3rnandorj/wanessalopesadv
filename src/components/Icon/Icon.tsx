import { IconBaseProps, IconType } from "react-icons";

import { BiConversation } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoBulbOutline } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsPersonX } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { TfiWrite } from "react-icons/tfi";
import { PiDrop } from "react-icons/pi";
import { RiBankLine } from "react-icons/ri";
import { RiHealthBookLine } from "react-icons/ri";

export type IconNames =
  | "ouvimos"
  | "analisamos"
  | "atuamos"
  | "corteDeEnergia"
  | "atrasoVoo_extravioDeBagagem"
  | "nomeSujo_protestoIndevido"
  | "cobrançaIndevida"
  | "problemasTelefonia"
  | "comprouNãoRecebeu"
  | "multasIndevidas"
  | "corteOuAtraso"
  | "problemasBancários"
  | "problemasSaúde";

export interface IconProps extends IconBaseProps {
  iconName: IconNames;
}

export function Icon({
  iconName,
  size = 40,
  onClick,
  ...iconProps
}: IconProps) {
  const IconComponent = iconMap[iconName];

  return <IconComponent onClick={onClick} size={size} {...iconProps} />;
}

const iconMap: Record<IconNames, IconType> = {
  ouvimos: BiConversation,
  analisamos: FaMagnifyingGlass,
  atuamos: FaCheck,
  corteDeEnergia: IoBulbOutline,
  atrasoVoo_extravioDeBagagem: GiCommercialAirplane,
  nomeSujo_protestoIndevido: BsPersonX,
  cobrançaIndevida: FaMoneyBillTrendUp,
  problemasTelefonia: BsTelephone,
  comprouNãoRecebeu: FiShoppingCart,
  multasIndevidas: TfiWrite,
  corteOuAtraso: PiDrop,
  problemasBancários: RiBankLine,
  problemasSaúde: RiHealthBookLine,
};
