"use client";

import { ServiceCard, serviceCardToMap } from "./components/ServiceCard";

export function ServiceList() {
  return (
    <div className="grid grid-cols-2 w-full gap-4">
      {serviceCardToMap.map((card) => (
        <ServiceCard key={card.description} {...card} />
      ))}
    </div>
  );
}
