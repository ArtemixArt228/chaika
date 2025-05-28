"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MainButton } from "@/components/shared/button";

import { HeroAdvantagesCards } from "@/app/(homepage)/hero-section/components/hero-advantages-cards";

const slides = [
  {
    id: 1,
    image: "/homepage/hero-section/slides/slide-1.png",
    title: "Фермерське господарство «ЧАЙКА»",
    subtitle:
      "Комплексний підхід до агробізнесу, тваринництва, садівництва та м’ясопереробки. «Чайка» – це торгова марка, якій довіряють споживачі, адже знають, що наша продукція створена з натуральних інгредієнтів.",
  },
];

export const HeroSlider = () => {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 p-8 rounded-xl text-white text-center max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
                <MainButton text="Стати партнером" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <HeroAdvantagesCards />
    </div>
  );
};
