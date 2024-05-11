import { IconBaseProps, IconType } from "react-icons";
import { Md11Mp } from "react-icons/md";

type IconNames = "Md11Mp";

interface IconProps extends IconBaseProps {
  iconName: IconNames;
}

export function Icon({
  iconName,
  size = 40,
  onClick,
  ...iconProps
}: IconProps) {
  const IconComponent = iconMap[iconName];

  return <Md11Mp onClick={onClick} size={size} {...iconProps} />;
}

const iconMap: Record<IconNames, IconType> = {
  Md11Mp: Md11Mp,
};
