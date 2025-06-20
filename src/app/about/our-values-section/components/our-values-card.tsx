"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TOurValuesCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  index?: number;
};

export const OurValuesCard = ({
  cardImage,
  cardTitle,
  cardDescription,
  index = 0,
}: TOurValuesCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="h-full"
    >
      <Card className="relative border-0 p-0 group h-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-main/20 to-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />

        <CardHeader className="bg-night-rider group-hover:bg-main rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 transition-all duration-500 ease-out relative z-10 h-full flex flex-col">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [0, -2, 2, 0],
            }}
            transition={{
              scale: { duration: 0.3 },
              rotate: { duration: 0.6, ease: "easeInOut" },
            }}
            className="mb-3 sm:mb-4 md:mb-5"
          >
            <Image
              width={64}
              height={64}
              src={cardImage}
              alt={`${cardTitle} icon`}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-500 group-hover:filter group-hover:brightness-0 group-hover:drop-shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="flex-grow flex flex-col"
          >
            <CardTitle className="text-white group-hover:text-white text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold mb-2 sm:mb-3 transition-all duration-500 group-hover:transform group-hover:translate-x-1">
              {cardTitle}
            </CardTitle>

            <CardDescription className="text-stone-400 group-hover:text-white/95 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-relaxed transition-all duration-500 group-hover:transform group-hover:translate-x-1 flex-grow">
              {cardDescription}
            </CardDescription>
          </motion.div>

          {/* Subtle accent line that appears on hover */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/50 to-transparent"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Floating particles effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  y: [-10, -20, -10],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};
