import { backgroundImage } from "@/assets";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...divProps }: SectionProps) {
  const styles = {
    sectionContainer: `max-w-[70rem] mx-auto flex flex-col items-center
     md:mt-14 md:mb-14 
     lg:mt-20 lg:mb-20
    ${className}
  `,
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.section.src})`,
      }}
      className={`-mt-px -ml-px`}
    >
      <div {...divProps} className={styles.sectionContainer} />
    </div>
  );
}
