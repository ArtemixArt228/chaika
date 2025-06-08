"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { MainButton } from "@/components/shared/button";

import { HeroAdvantagesCards } from "@/app/(homepage)/hero-section/components/hero-advantages-cards";

import "swiper/css";
import "swiper/css/navigation";

const SLIDES = [
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
      {/* Custom Arrows */}
      <div className="absolute top-1/2 w-10 h-10 left-2 md:left-8 z-50 -translate-y-1/2 custom-swiper-button-prev cursor-pointer">
        <ChevronLeft className="w-10 h-10 text-gray-300" />
      </div>
      <div className="absolute top-1/2 w-10 h-10 right-2 md:right-8 z-50 -translate-y-1/2 custom-swiper-button-next cursor-pointer">
        <ChevronRight className="w-10 h-10 text-gray-300" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-white text-center max-w-sm md:max-w-[50rem]">
                <h1 className="text-2xl md:text-4xl font-medium mb-8 uppercase">
                  {slide.title}
                </h1>
                <p className="text-sm text-gray-300 md:text-xl px-8 md:p-0 mb-6">
                  {slide.subtitle}
                </p>
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
