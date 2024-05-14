import {
  Button,
  FlowOfWork,
  Section,
  ServiceCard,
  Text,
  serviceCardToMap,
  Image,
} from "@/components";

import { evidences } from "@/assets";

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
          {serviceCardToMap.map((card) => (
            <ServiceCard key={card.description} {...card} />
          ))}
        </div>
      </Section>

      <Section>
        <Text
          tag="p"
          preset="heading_sm"
          className="text-zinc-50 text-center mb-8"
        >
          Entenda Como Trabalhamos
        </Text>

        <FlowOfWork flow="first" />
      </Section>

      <Section>
        <Text
          tag="p"
          preset="heading_sm"
          className="text-zinc-50 text-center mb-8"
        >
          O Atendimento é Pautado em Três Pilares:
        </Text>

        <FlowOfWork flow="second" />
      </Section>

      <Section>
        <Text
          tag="p"
          preset="heading_sm"
          className="text-zinc-50 text-center mb-8"
        >
          A Opinião de Nossos Clientes
        </Text>

        <Image src={evidences.evidence} alt="" />
        <Image src={evidences.evidence1} alt="" />
        <Image src={evidences.evidence2} alt="" />
        <Image src={evidences.evidence3} alt="" />
      </Section>
    </div>
  );
}
