import React from "react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import { HistoryItem } from "@/app/about/history-section/components/history-item";

const HISTORY_ITEMS = [
  {
    itemImage: "/about/history-section/icons/item-1.svg",
    itemDescription:
      "У планах — збільшення виробничих потужностей для одночасного утримання свиней до 12 000 голів та птиці до 400 000 голів.",
  },
  {
    itemImage: "/about/history-section/icons/item-2.svg",
    itemDescription:
      "Відкриття нового забійного цеху для свиней потужністю 35 голів на годину вже на  завершальному етапі.",
  },
  {
    itemImage: "/about/history-section/icons/item-3.svg",
    itemDescription:
      "Зараз ми будуємо сучасний елеватор та комбікормовий завод, що дозволить підвищити ефективність і якість нашої продукції.",
  },
  {
    itemImage: "/about/history-section/icons/item-4.svg",
    itemDescription:
      "У 2019 році ми провели масштабну реконструкцію тваринницького комплексу, встановивши новітнє європейське обладнання для вирощування тварин.",
  },
];

export const HistorySection = () => {
  return (
    <section className="container mx-auto mb-20 relative">
      <h4 className="text-center text-white uppercase text-2xl md:text-4xl mb-16">
        Історія створення та розвиток компанії
      </h4>

      <div className="flex justify-between items-start gap-4">
        <div className="relative">
          <Separator
            orientation="vertical"
            className="bg-gray-100 absolute left-13 md:left-10 z-1"
          />
          <div className="flex flex-col gap-80 lg:gap-18 z-10 relative px-3 md:p-0">
            {HISTORY_ITEMS.map((item, i) => (
              <HistoryItem key={i} {...item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col absolute top-75 gap-48  sm:gap-43  sm:top-65 right-0 lg:top-0 lg:relative lg:block lg:pr-20">
          <div className="relative w-70 h-55 md:w-100 md:h-60 rounded-l-xl md:rounded-xl">
            <Image
              fill
              src="/about/history-section/images/image-1.png"
              alt="history image"
              className="object-cover rounded-l-xl md:rounded-xl"
            />
          </div>
          <div className="relative w-70 h-55 md:w-100 md:h-60 rounded-l-xl md:rounded-xl lg:-top-20 lg:left-20">
            <Image
              src="/about/history-section/images/image-2.png"
              alt="history image"
              className="object-cover rounded-l-xl md:rounded-xl"
              fill
            />
          </div>
          <div className="relative w-70 h-55 md:w-100 md:h-60 rounded-l-xl md:rounded-xl lg:-top-30">
            <Image
              src="/about/history-section/images/image-3.png"
              alt="history image"
              className="object-cover rounded-l-xl md:rounded-xl"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};
