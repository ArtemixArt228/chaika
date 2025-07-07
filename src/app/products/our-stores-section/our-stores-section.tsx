"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { containerVariants, fadeInUpVariants } from "@/constants/animations";

const slides = [
  {
    id: 1,
    image: "/products/our-stores-section/image-1.png",
    title: "Мʼясний магазин  ”Чайка”",
    description:
      "Наш магазин пропонує асортимент свіжого м‘яса та готової м’ясної продукції",
    city: "м.Луцьк,",
    location: "вул. Ковельська 15, прос-т Перемоги 11",
    schedule: "Пн-Сб 8:30 - 19:00 Нд 8:30 - 17:00",
  },
  {
    id: 2,
    image: "/products/our-stores-section/image-1.png",
    title: "Мʼясний магазин  ”Чайка”",
    description:
      "Наш магазин пропонує асортимент свіжого м‘яса та готової м’ясної продукції",
    city: "м.Луцьк,",
    location: "вул. Ковельська 15, прос-т Перемоги 11",
    schedule: "Пн-Сб 8:30 - 19:00 Нд 8:30 - 17:00",
  },
  {
    id: 3,
    image: "/products/our-stores-section/image-1.png",
    title: "Мʼясний магазин  ”Чайка”",
    description:
      "Наш магазин пропонує асортимент свіжого м‘яса та готової м’ясної продукції",
    city: "м.Луцьк,",
    location: "вул. Ковельська 15, прос-т Перемоги 11",
    schedule: "Пн-Сб 8:30 - 19:00 Нд 8:30 - 17:00",
  },
];

export const OurStoresSection = () => {
  return (
    <motion.section
      className="container mx-auto mb-16 sm:mb-20 lg:mb-24 xl:mb-36 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        variants={fadeInUpVariants}
        className="
          text-center text-white uppercase
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          mb-6 sm:mb-8 lg:mb-12
          px-4 py-3 sm:px-6 sm:py-4 md:px-0 md:py-0
          rounded-lg md:rounded-none
          font-medium tracking-wide
          leading-tight sm:leading-tight
          max-w-5xl mx-auto
          "
      >
        Наші магазини
      </motion.h2>

      <div className="w-full relative">
        <motion.button
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.9 }}
          className="custom-swiper-button-prev cursor-pointer absolute top-1/2 left-0.5 md:left-4 z-50 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 ease-out border border-white/20 hover:border-white/40"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.9 }}
          className="custom-swiper-button-next cursor-pointer absolute top-1/2 right-0.5 md:right-4 z-50 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 ease-out border border-white/20 hover:border-white/40"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </motion.button>
        <Swiper
          modules={[Navigation, Autoplay, EffectCards]}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          effect="cards"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="relative w-full aspect-square md:w-150 md:h-142 md:left-10">
                  <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 37.5rem"
                    src={slide.image}
                    alt="team member"
                    fill
                    className="md:rounded-xl object-cover"
                  />
                </div>

                <div className="relative bg-night-rider text-white rounded-xl p-6 w-10/12 bottom-10 lg:bottom-0 md:w-full md:max-w-md md:right-10">
                  <h6 className="text-white uppercase text-2xl lg:text-3xl mb-3">
                    {slide.title}
                  </h6>
                  <p className="text-base md:text-xl text-stone-400 mb-6">
                    {slide.description}
                  </p>
                  <div className="flex flex-row lg:flex-col gap-4">
                    <p className="text-base md:text-xl text-white mb-6 max-w-56">
                      {slide.city}
                      <br />
                      {slide.location}
                    </p>

                    <p className="text-base md:text-xl text-white mb-6 max-w-48">
                      Графік роботи:
                      <br />
                      {slide.schedule}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};
