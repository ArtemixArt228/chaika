"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

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
  const headerRef = useRef(null);
  const imagesRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true });
  const areImagesInView = useInView(imagesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="sm:container sm:mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32 relative pl-4 pr-0 sm:px-6 md:px-8">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
      >
        <motion.h2
          className="text-white uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        >
          Історія створення та <br className="hidden sm:block" />
          розвиток компанії
        </motion.h2>
      </motion.div>

      <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 xl:gap-16">
        <div className="relative flex-1 lg:max-w-2xl">
          <motion.div
            className="absolute left-8 sm:left-9 md:left-10 lg:left-11 top-0 w-0.5 bg-gradient-to-b from-main via-gray-300 to-transparent z-0"
            initial={{ height: 0 }}
            animate={isHeaderInView ? { height: "100%" } : { height: 0 }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-60 sm:gap-72 md:gap-64 lg:gap-24 z-10 relative">
            {HISTORY_ITEMS.map((item, i) => (
              <HistoryItem key={i} {...item} index={i} />
            ))}
          </div>
        </div>

        {/* Images Section */}
        <motion.div
          ref={imagesRef}
          className="absolute lg:relative right-0 top-28 xs:top-24 sm:top-28 md:top-24 lg:top-0 flex flex-col lg:flex-1 gap-36 xs:gap-32 sm:gap-36 md:gap-20 lg:gap-0 lg:max-w-md xl:max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={
            areImagesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
          }
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            "/about/history-section/images/image-1.png",
            "/about/history-section/images/image-2.png",
            "/about/history-section/images/image-3.png",
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                areImagesInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
              className={`
                relative w-72 sm:w-80 md:w-96 lg:w-full h-48 sm:h-56 md:h-64 lg:h-60 xl:h-72 rounded-l-xl sm:rounded-xl overflow-hidden cursor-pointer
                ${index === 1 ? "lg:ml-8 xl:ml-12 lg:-mt-8 xl:-mt-12" : ""}
                ${index === 2 ? "lg:-mt-8 xl:-mt-12" : ""}
              `}
            >
              {/* Image overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 z-10"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <Image
                fill
                src={src}
                alt={`Company history milestone ${index + 1}`}
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Subtle corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-0 h-0 border-l-8 border-b-8 border-l-transparent border-b-main/80"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
