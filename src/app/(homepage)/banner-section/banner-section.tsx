"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const BannerSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="relative container mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-40 xl:mb-52 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="relative lg:rounded-xl h-72 sm:h-80 md:h-92 lg:h-96 xl:h-[400px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
      >
        {/* Parallax image */}
        <motion.div className="relative w-full h-full overflow-hidden lg:rounded-xl">
          <motion.div style={{ y: parallaxY }} className="absolute inset-0">
            <Image
              src="/homepage/banner-section/banner.png"
              alt="Banner"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover lg:rounded-xl"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="absolute w-full z-10 px-4 sm:px-6 lg:px-8 -bottom-12 sm:-bottom-14 md:-bottom-16 lg:-bottom-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="bg-night-rider rounded-xl sm:rounded-2xl text-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{
              y: -4,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl uppercase text-white leading-tight sm:leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                &#34;Чайка&#34;
              </motion.span>{" "}
              – це більше, ніж виробництво. Це довіра, якість і турбота про
              майбутнє в кожному нашому рішенні
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
