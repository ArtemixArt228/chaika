import React from "react";

import { ActivityCard } from "@/app/(homepage)/activity-section/components/activity-card";

export const ActivitySection = () => {
  return (
    <section className="container mx-auto">
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        Сфери діяльності
      </h4>
      <p className="text-stone-400 text-xl text-center">
        Від вирощування до готової продукції. Ми працюємо на перетині традицій
        та інновацій, об'єднуючи найкращі природні ресурси з сучасними
        технологіями
      </p>

      <div>
        <ActivityCard />
      </div>
    </section>
  );
};
