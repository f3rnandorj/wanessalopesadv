"use client";

import { Step, StepProps } from "./components/Step";

type Flow = "first" | "second";
interface FlowOfWorkProps extends React.HTMLAttributes<HTMLDivElement> {
  flow: Flow;
}

export function FlowOfWork({ flow, className, ...divProps }: FlowOfWorkProps) {
  const dataToMap = stepDataToMap[flow];

  return (
    <div className={`${className} flex flex-1 `} {...divProps}>
      {dataToMap.map((step) => (
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
      title: "",
      description: "",
      iconName: "atuamos",
    },
    {
      title: "",
      description: "",
      iconName: "atuamos",
    },
    {
      title: "",
      description: "",
      iconName: "atuamos",
    },
  ],
};
