"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/about/our-team-section/image-1.png",
    description:
      "Кожен покупець, який обирає нашу торгову марку «Чайка» відчує справжній смак  ковбасно-м’ясних виробів. Тому що це чудове поєднання натуральної сировини, ароматних спецій і турботи про споживача.",
  },
];

export const OurTeamSection = () => {
  return (
    <section className="container mx-auto mb-20">
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        Наша команда
      </h4>

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
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="relative w-80 h-80">
                <Image
                  src={slide.image}
                  alt="team member"
                  fill
                  className="rounded-xl w-full md:w-1/2 max-w-md object-cover"
                />
              </div>

              <div className="bg-night-rider text-white rounded-xl p-6 w-full md:w-1/2 relative">
                <div className="text-4xl text-main mb-2">“</div>
                <p className="text-sm md:text-base leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
