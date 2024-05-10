import { Button, Section, Text } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Section>
        <Text
          preset="heading"
          tag="h1"
          isBold
          className="text-zinc-50 text-center mb-10"
        >
          Precisa de um Especialista em <br />
          Direito do Consumidor?
        </Text>

        <Text tag="p" className="text-zinc-300 text-center mb-10">
          Conte com César Ribeiro para defender seus direitos.
        </Text>

        <Button title="Quero Atendimento" />
      </Section>

      <Section></Section>

      <Section>
        <div className="h-screen"></div>
      </Section>
    </div>
  );
}
