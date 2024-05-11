import { Button, Section, ServiceCard, Text } from "@/components";

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
          Bem vindo (a)! Se você está com problema em qualquer relação de
          consumo, você está no lugar certo!
          <br />
          <br /> Eu sou a Wanessa Lopes, advogada, especialista em Direito do
          Consumidor. <br />
          Como posso te ajudar?
        </Text>

        <Button title="Quero Atendimento" />
      </Section>

      <Section>
        <Text
          tag="p"
          preset="heading_sm"
          className="text-zinc-50 text-center mb-8"
        >
          Um Pouco de Nossos Serviços
        </Text>

        <div className="grid grid-cols-2 w-full gap-4">
          <ServiceCard />
          <ServiceCard />

          <ServiceCard />
          <ServiceCard />

          <ServiceCard />
          <ServiceCard />

          <ServiceCard />
          <ServiceCard />

          <ServiceCard />
          <ServiceCard />
        </div>
      </Section>

      <Section>
        <div className="h-screen"></div>
      </Section>
    </div>
  );
}
