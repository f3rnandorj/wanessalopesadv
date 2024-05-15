import { backgroundImage } from "@/assets";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MARGIN_HORIZONTAL = "px-6";

export function Section({ ...divProps }: SectionProps) {
  const styles = {
    sectionContainer: `max-w-[70rem] flex flex-1 flex-col items-center 
     md:mt-14 md:mb-14 
     lg:mt-20 lg:mb-20 lg:mx-auto 
     ${MARGIN_HORIZONTAL}
  `,
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.section.src})`,
      }}
      className={`-mt-1.5 -ml-1.5 bg-cover py-6
      lg:py-0`}
    >
      <div {...divProps} className={styles.sectionContainer} />
    </div>
  );
}
