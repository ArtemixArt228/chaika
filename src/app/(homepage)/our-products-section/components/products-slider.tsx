"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Button } from "@/components/ui/button";
import { MainButton } from "@/components/shared/button";

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
    <div className="relative">
      <div className="absolute top-0 right-0 z-10 flex gap-2 p-2">
        <Button variant="ghost" className="swiper-button-prev p-2">
          <ArrowLeft />
        </Button>
        <Button variant="ghost" className="swiper-button-next p-2">
          <ArrowRight />
        </Button>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={16}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
              <MainButton text={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
