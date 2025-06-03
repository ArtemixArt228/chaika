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
    <section className="container mx-auto mb-20">
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        Історія створення та розвиток компанії
      </h4>

      <div className="flex justify-between items-center gap-4">
        <div className="relative">
          <Separator
            orientation="vertical"
            className="bg-gray-100 absolute left-10 z-1"
          />
          <div className="flex flex-col gap-6 z-10 relative">
            {HISTORY_ITEMS.map((item, i) => (
              <HistoryItem key={i} {...item} />
            ))}
          </div>
        </div>

        <div>
          <div className="w-110 h-55 relative rounded-xl">
            <Image
              fill
              src="/about/history-section/images/image-1.png"
              alt="history image"
              className="object-cover rounded-xl"
            />
          </div>
          <div className="w-110 h-55 relative rounded-xl -top-10 left-20">
            <Image
              src="/about/history-section/images/image-2.png"
              alt="history image"
              className="object-cover rounded-xl"
              fill
            />
          </div>
          <div className="w-110 h-55 relative rounded-xl -top-20">
            <Image
              src="/about/history-section/images/image-3.png"
              alt="history image"
              className="object-cover rounded-xl"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};
