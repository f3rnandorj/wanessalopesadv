import { backgroundImage } from "@/assets";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...divProps }: SectionProps) {
  const $sectionContainerStyles = `
    max-w-[70rem] mx-auto
    md:mt-14 md:mb-14 
    lg:mt-16 lg:mx-auto lg:mb-16
    ${className}
  `;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.section.src})`,
      }}
      className={`-mt-px`}
    >
      <div {...divProps} className={$sectionContainerStyles} />
    </div>
  );
}
