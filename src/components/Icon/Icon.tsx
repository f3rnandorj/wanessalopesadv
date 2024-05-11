import { IconBaseProps, IconType } from "react-icons";

import { BiConversation } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

export type IconNames = "ouvimos" | "analisamos" | "atuamos";

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
};
