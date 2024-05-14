import { backgroundImage } from "@/assets";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...divProps }: SectionProps) {
  const styles = {
    sectionContainer: `max-w-[70rem] mx-auto flex flex-1 flex-col items-center
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
      className={`-mt-1.5 -ml-1.5 bg-cover`}
    >
      <div {...divProps} className={styles.sectionContainer} />
    </div>
  );
}