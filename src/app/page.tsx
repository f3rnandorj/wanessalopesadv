import { Section, Text } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Section>
        <Text id="hello" className="text-white">
          Hello world
        </Text>
      </Section>
    </div>
  );
}
