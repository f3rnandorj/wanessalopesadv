import { backgroundImage } from "@/assets";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ ...divProps }: SectionProps) {
  return (
    <div
      className={`h-12`}
      {...divProps}
      style={{ backgroundImage: `url(${backgroundImage.section.src})` }}
    />
  );
}
