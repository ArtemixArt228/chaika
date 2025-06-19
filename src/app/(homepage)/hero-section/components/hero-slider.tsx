"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import { MainButton } from "@/components/shared/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const SLIDES = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Фермерське господарство «ЧАЙКА»",
    subtitle:
      "Комплексний підхід до агробізнесу, тваринництва, садівництва та м'ясопереробки. «Чайка» – це торгова марка, якій довіряють споживачі, адже знають, що наша продукція створена з натуральних інгредієнтів.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Натуральна продукція",
    subtitle:
      "Вирощуємо та виробляємо з любов'ю до землі та повагою до природи. Кожен продукт проходить ретельний контроль якості.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Екологічне майбутнє",
    subtitle:
      "Впроваджуємо сучасні технології для сталого розвитку сільського господарства та збереження довкілля для майбутніх поколінь.",
  },
];

export const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Navigation Arrows */}
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

      {/* Slides */}
      <Swiper
        modules={[EffectFade, Navigation, Autoplay]}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        autoplay={{ delay: 5000 }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/30" />

              {activeIndex === index && (
                <motion.div
                  key={slide.id} // triggers remount
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative z-10 text-white text-center px-8 sm:px-6 lg:px-8 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 uppercase tracking-wide leading-tight drop-shadow-lg"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-4xl mx-auto drop-shadow-md"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <MainButton text="Стати партнером" />
                  </motion.div>
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
