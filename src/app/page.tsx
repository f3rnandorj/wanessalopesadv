import { backgroundImage, evidences, utilsImages } from "@/assets";
import {
  FlowOfWork,
  Section,
  ServiceCard,
  Text,
  serviceCardToMap,
  Image,
  Button,
  Icon,
} from "@/components";
import { SocialMedias } from "@/components/SocialMedias/SocialMedias";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Section>
        <Text
          id="Precisa de Especialista"
          preset="heading"
          tag="h1"
          isBold
          className="text-zinc-50 text-center custom-mb"
        >
          Precisa de Especialista em <br />
          Direito do Consumidor?
        </Text>

        <Text
          id="Bem vindo"
          tag="p"
          className="text-zinc-300 text-center custom-mb"
        >
          Bem vindo (a)! Se você está com problema em qualquer relação de
          consumo, você está no lugar certo!
        </Text>

        <Text
          id="Eu sou a Wanessa Lopes"
          tag="p"
          className="text-zinc-300 text-center custom-mb"
        >
          Eu sou a Wanessa Lopes, advogada, especialista em Direito do
          Consumidor.
        </Text>

        <Text
          id="Como posso te ajudar?"
          tag="p"
          className="text-zinc-300 text-center custom-mb 
          lg:-mt-10"
        >
          Como posso te ajudar?
        </Text>

        <Button title="Quero Atendimento" />
      </Section>

      <Section id="our_services">
        <Text
          id="Um Pouco de Nossos Serviços"
          tag="p"
          preset="heading_sm"
          className="text-zinc-50 text-center custom-mb"
        >
          Um Pouco de Nossos Serviços
        </Text>

        <div className="grid grid-cols-2 w-full gap-4">
          {serviceCardToMap.map((card) => (
            <ServiceCard key={card.description} {...card} />
          ))}
        </div>
      </Section>

      <Section id="how_we_act">
        <Text
          id="Entenda Como Trabalhamos"
          tag="p"
          preset="heading_sm"
          className="text-zinc-50 text-center custom-mb"
        >
          Entenda Como Trabalhamos
        </Text>

        <FlowOfWork flow="first" />
      </Section>

      <Section>
        <Text
          id="O Atendimento é Pautado em Três Pilares:"
          tag="p"
          preset="heading_sm"
          className="text-zinc-50 text-center custom-mb"
        >
          O Atendimento é Pautado em Três Pilares:
        </Text>

        <FlowOfWork flow="second" />
      </Section>

      <Section>
        <Text
          id="A Opinião de Nossos Clientes"
          tag="p"
          preset="heading_sm"
          className="text-zinc-50 text-center custom-mb"
        >
          A Opinião de Nossos Clientes
        </Text>

        <div
          className="grid grid-cols-1 gap-4 custom-mb 
          md:grid md:grid-cols-2
          lg:grid lg:grid-cols-2"
        >
          <Image src={evidences.evidence} alt="" className="w-full h-full " />
          <Image src={evidences.evidence2} alt="" className="w-full h-full" />
          <Image src={evidences.evidence1} alt="" className="w-full h-full" />
          <Image src={evidences.evidence3} alt="" className="w-full h-full" />
        </div>

        <Button title="Quero Atendimento Agora" />
      </Section>

      <Section id="who_i_am" className="">
        <div
          className="flex flex-col 
          md:flex-row md:h-[420px]
          lg:flex-row lg:h-[420px]"
        >
          <Text
            id="Conheça o Especialista"
            tag="h1"
            preset="heading_sm"
            className="text-zinc-300 text-center custom-mb 
            md:hidden
            lg:hidden"
            isBold
          >
            Conheça o Especialista
          </Text>

          <Image
            src={utilsImages.avatar}
            alt=""
            width={420}
            height={420}
            className=" w-full self-center 
            md:h-[420px] md:w-[420px]
            lg:h-[420px] lg:w-[420px]"
          />

          <div
            style={{
              backgroundImage: `url(${backgroundImage.cardHorizontal.src})`,
            }}
            className="flex flex-col justify-center items-center -mt-px -ml-px bg-cover px-4 pt-4 
            md:py-10 md:px-10 
            lg:py-14 lg:px-14 "
          >
            <Text
              id="Conheça o Especialista"
              tag="h1"
              preset="heading_sm"
              className="text-zinc-950 text-center custom-mb hidden
              md:block
              lg:block"
              isBold
            >
              Conheça o Especialista
            </Text>

            <Text
              id="professional description"
              tag="p"
              preset="small"
              className="text-zinc-950 custom-mb text-justify"
              isMedium
            >
              Sou Wanessa Lopes, advogada, especialista em direito do
              consumidor. Me especializei em toda parte jurídica que envolva
              relação de consumo. Nosso escritório atua em problemas com
              telefonia, bancos, energia elétrica, negativações indevidas,
              dentre outros. <br />
              <br />
              Sou sócia-proprietária e possuo uma equipe especializada em
              Direito do Consumidor com atendimento online e presencial em todo
              o Brasil.
            </Text>

            <Button title="Quero Atendimento Agora" className="custom-mb" />
          </div>
        </div>
      </Section>

      <Section className="text-zinc-300 text-center ">
        <Text
          id="Nossos contatos"
          tag="h1"
          preset="heading_sm"
          className="text-zinc-300 text-center custom-mb "
        >
          Nossos contatos
        </Text>

        <div
          className="grid grid-cols-1 gap-4 mb-10
          md:grid md:grid-cols-2 md:gap-40
          lg:grid lg:grid-cols-2 lg:gap-40
        "
        >
          <div className="w-full space-y-4">
            <div className="flex items-center gap-4">
              <Icon iconName="location" color="#991B1B" />
              <Text id="Escritório localizado" tag="p">
                Escritório localizado no Rio de Janeiro
              </Text>
            </div>

            <div className="flex items-center gap-4">
              <Icon iconName="call" color="#991B1B" />
              <Text id="982180065" tag="p">
                (21) 982180065
              </Text>
            </div>

            <div className="flex items-center gap-4">
              <Icon iconName="mail" color="#991B1B" />
              <Text id="advwanessalopes" tag="p">
                advwanessalopes@gmail.com
              </Text>
            </div>
          </div>

          <div>
            <SocialMedias />
          </div>
        </div>

        <Text tag="p" className="text-xs custom-mb">
          Este site está protegido pela Lei de Direitos Autorais (Lei 9610 de
          19/02/1998). Sua reprodução total ou parcial é proibida nos termos da
          Lei.
        </Text>

        <Text tag="p" className="text-xs">
          Developed by Fernando Henrique Dev
        </Text>
      </Section>
    </div>
  );
}
