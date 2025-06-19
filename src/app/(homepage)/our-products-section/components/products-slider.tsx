"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import { MainButton } from "@/components/shared/button";

import { containerVariants } from "@/constants/animations";

import "swiper/css";
import "swiper/css/navigation";

const PRODUCTS = [
  "ВИРОБИ Сирокопчені",
  "ВИРОБИ печені",
  "ВИРОБИ салямі",
  "ВИРОБИ варені",
  "ВИРОБИ Копчено-варені",
  "ВИРОБИ Вітчина",
];

export const ProductsSlider = () => {
  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute -top-14 right-0 z-10 flex gap-4 p-2">
        <motion.button
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.9 }}
          className="custom-swiper-button-prev cursor-pointer w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 ease-out border border-white/20 hover:border-white/40"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.9 }}
          className="custom-swiper-button-next cursor-pointer w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 ease-out border border-white/20 hover:border-white/40"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="pt-12"
      >
        {PRODUCTS.map((product, i) => (
          <SwiperSlide key={i}>
            <div className="relative bg-night-rider rounded-2xl shadow p-4 h-40 flex flex-col gap-4 items-center justify-center text-xl overflow-hidden">
              <Image
                src="/chaika-logo.svg"
                alt="Logo Background"
                width={300}
                height={300}
                className="absolute -bottom-20 -right-16 opacity-10 z-0 pointer-events-none select-none"
              />

              <Image
                src="/chaika-logo.svg"
                alt="Logo"
                width={48}
                height={48}
                className="z-10 relative"
              />
              <MainButton text={product} className="z-10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
