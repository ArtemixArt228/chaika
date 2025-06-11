"use client";

import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const SLIDES = [
  {
    id: 1,
    image: "/about/our-team-section/image-1.png",
    description:
      "Кожен покупець, який обирає нашу торгову марку «Чайка» відчує справжній смак  ковбасно-м’ясних виробів. Тому що це чудове поєднання натуральної сировини, ароматних спецій і турботи про споживача.",
  },
  {
    id: 2,
    image: "/about/our-team-section/image-1.png",
    description:
      "@ покупець, який обирає нашу торгову марку «Чайка» відчує справжній смак  ковбасно-м’ясних виробів. Тому що це чудове поєднання натуральної сировини, ароматних спецій і турботи про споживача.",
  },
];

export const OurTeamSection = () => {
  return (
    <section className="container mx-auto mb-20">
      <h4 className="text-center text-white uppercase text-2xl md:text-4xl mb-16">
        Наша команда
      </h4>

      <div className="w-full relative">
        <div className="absolute top-1/2 w-10 h-10 left-2 md:left-8 z-50 -translate-y-1/2 custom-swiper-button-prev cursor-pointer">
          <ChevronLeft className="w-10 h-10 text-gray-300" />
        </div>
        <div className="absolute top-1/2 w-10 h-10 right-2 md:right-8 z-50 -translate-y-1/2 custom-swiper-button-next cursor-pointer">
          <ChevronRight className="w-10 h-10 text-gray-300" />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          slidesPerView={1}
        >
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="relative w-full aspect-square md:w-142 md:h-142 md:left-10">
                  <Image
                    src={slide.image}
                    alt="team member"
                    fill
                    className="md:rounded-xl object-cover"
                  />
                </div>

                <div className="relative bg-night-rider text-white rounded-xl p-6 w-10/12 bottom-10 md:w-full md:max-w-md md:right-10">
                  <div className="relative w-20 h-15 mb-3">
                    <Image
                      src="/about/our-team-section/marks.svg"
                      alt="Quatation marks"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm md:text-base leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
