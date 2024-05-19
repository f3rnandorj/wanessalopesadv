"use client";

import { useWindowSize } from "@/hooks";
import { Step, StepProps } from "./components/Step";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Flow = "first" | "second";
interface FlowOfWorkProps extends React.HTMLAttributes<HTMLDivElement> {
  flow: Flow;
}

export function FlowOfWork({ flow, className, ...divProps }: FlowOfWorkProps) {
  const { width } = useWindowSize();

  const stepsData = stepDataToMap[flow];
  const sortedStepsData = [...stepsData].sort((a, b) => (a.onClick ? 1 : -1));

  const stepsToMap = width && width >= 640 ? stepsData : sortedStepsData;

  return (
    <div
      className={` -mx-appMarginHorizontal
      md:flex md:flex-1
      lg:flex lg:flex-1
      ${className}`}
      {...divProps}
    >
      {stepsToMap.map((step) => (
        <div key={step.title} className="flex flex-1">
          <Step {...step} />
        </div>
      ))}
    </div>
  );
}

const stepDataToMap: Record<Flow, StepProps[]> = {
  first: [
    {
      title: "OUVIMOS",
      description:
        "Ao chegar aqui, nos conte tudo sobre o que tá acontecendo e precisa resolver. Queremos te ajudar a resolver esse problema.",
      iconName: "ouvimos",
    },
    {
      title: "ANALISAMOS",
      description:
        "Depois de escutar com atenção sua história, vamos analisar qual é a melhor solução e depois explicaremos o que você precisa fazer, passo a passo",
      iconName: "analisamos",
      onClick: () => {},
    },
    {
      title: "ATUAMOS",
      description:
        "Após a análise do caso, explicamos como podemos ajudar e iniciamos a solução do seu problema.",
      iconName: "atuamos",
    },
  ],
  second: [
    {
      title: "CONFIANÇA",
      description:
        "Equipe especializada no assunto. Garantimos que sua demanda estará em ótimas mãos.",
      iconName: "confiança",
    },
    {
      title: "CONECTIVIDADE",
      description:
        "Atendemos a todo o Brasil  virtual e presencial. Terá nosso suporte até o desfecho do caso.",
      iconName: "conectividade",
    },
    {
      title: "AGILIDADE",
      description:
        "Estamos prontos pra te atender com a maior agilidade possível, porque entendemos que a urgência faz parte do nosso negócio.",
      iconName: "agilidade",
    },
  ],
};
