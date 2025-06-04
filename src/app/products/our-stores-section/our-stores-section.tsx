"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/about/our-team-section/image-1.png",
    title: "Мʼясний магазин  ”Чайка”",
    description:
      "Наш магазин пропонує асортимент свіжого м‘яса та готової м’ясної продукції",
  },
];

export const OurStoresSection = () => {
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
                <h4 className="text-center text-white uppercase text-4xl mb-8">
                  {slide.title}
                </h4>
                <p className="text-stone-400 text-xl text-center">
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
