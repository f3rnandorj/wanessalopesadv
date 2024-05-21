"use client";

import { backgroundImage } from "@/assets";
import { Icon, IconNames } from "../../Icon/Icon";
import { Text } from "../../Text/Text";
import { Button } from "../../Button/Button";
import { motion, inView, animate } from "framer-motion";
import { useEffect } from "react";

interface ServiceCardProps {
  id: string;
  isTopScreen?: boolean;
  iconName: IconNames;
  description: string;
}

export function ServiceCard({ id, description, iconName }: ServiceCardProps) {
  useEffect(() => {
    inView("div", ({ target }) => {
      animate(target, { opacity: 1, y: 0 }, { duration: 1 });
    });
  }, []);

  return (
    <motion.div
      id={id}
      style={{
        backgroundImage: `url(${backgroundImage.cardVertical.src})`,
      }}
      className="flex flex-col bg-cover bg-no-repeat text-center items-center justify-between px-2 min-h-52 w-full
      md:px-4 md:justify-evenly md:h-[300px]
      lg:px-4 lg:justify-evenly lg:h-[300px]"
      initial={{ opacity: 0, y: 50 }}
    >
      <Icon
        iconName={iconName}
        className="mt-4 mb-4
        md:mt-0
        lg:mt-0"
      />

      <Text tag="p" preset="heading_sm" isMedium className="mb-4 text-base">
        {description}
      </Text>

      <Button title="Quero atendimento" preset="outline" className="mb-2" />
    </motion.div>
  );
}

export const serviceCardToMap: ServiceCardProps[] = [
  {
    id: "Corte de energia",
    description: "Corte de energia",
    iconName: "corteDeEnergia",
  },
  {
    id: "Atraso de voo / Extravio de bagagem",
    description: "Atraso de voo / Extravio de bagagem",
    iconName: "atrasoVoo_extravioDeBagagem",
  },
  {
    id: "Nome sujo / Protesto indevido",
    description: "Nome sujo / Protesto indevido",
    iconName: "nomeSujo_protestoIndevido",
  },
  {
    id: "Cobranças indevidas",
    description: "Cobranças indevidas",
    iconName: "cobrançaIndevida",
  },
  {
    id: "Problemas com telefonia",
    description: "Problemas com telefonia",
    iconName: "problemasTelefonia",
  },
  {
    id: "Comprou e não recebeu",
    description: "Comprou e não recebeu",
    iconName: "comprouNãoRecebeu",
  },
  {
    id: "Multas indevidas",
    description: "Multas indevidas",
    iconName: "multasIndevidas",
  },
  {
    id: "Corte ou atraso no restabelecimento de água",
    description: "Corte ou atraso no restabelecimento de água",
    iconName: "corteOuAtraso",
  },
  {
    id: "Problemas bancários",
    description: "Problemas bancários",
    iconName: "problemasBancários",
  },
  {
    id: "Problemas com plano de saúde",
    description: "Problemas com plano de saúde",
    iconName: "problemasSaúde",
  },
];
