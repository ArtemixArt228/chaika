"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

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
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="relative w-full aspect-square md:w-150 md:h-142 md:left-10">
                <Image
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
    </section>
  );
};
