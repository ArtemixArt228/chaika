import React from "react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
      delay: 0.2,
    },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

const cardHeaderVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

type TActivityCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
};

export const ActivityCard = ({
  cardTitle,
  cardDescription,
  cardImage,
}: TActivityCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
      className="group"
    >
      <Card
        className="
        max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-98
        w-full sm:w-80 md:w-96 lg:w-98
        h-60 sm:h-64 md:h-68 lg:h-72 xl:h-80
        relative p-0 border-0
        rounded-lg
        shadow-lg hover:shadow-2xl
        transition-shadow duration-300 ease-out
      "
      >
        <motion.div
          variants={contentVariants}
          className="
            absolute w-full z-20
            px-3 sm:px-4 md:px-5 lg:px-6
            -bottom-12 sm:-bottom-14 md:-bottom-16 lg:-bottom-16
            group-hover:-bottom-10 sm:group-hover:-bottom-12 md:group-hover:-bottom-14 lg:group-hover:-bottom-14
            transition-all duration-300 ease-out
          "
        >
          <motion.div variants={cardHeaderVariants}>
            <CardHeader
              className="
              bg-night-rider rounded-lg sm:rounded-xl
              text-center
              px-4 sm:px-5 md:px-6 lg:px-6
              py-3 sm:py-4 md:py-4 lg:py-4
              shadow-lg group-hover:shadow-xl
              backdrop-blur-sm
              border border-gray-700/50
              transition-all duration-300 ease-out
            "
            >
              <CardTitle
                className="
                text-white uppercase
                text-sm sm:text-base md:text-lg lg:text-lg
                font-medium tracking-wide
                mb-1 sm:mb-2
                group-hover:text-gray-100
                transition-colors duration-300 ease-out
                leading-tight
              "
              >
                {cardTitle}
              </CardTitle>

              <CardDescription
                className="
                text-stone-400
                text-xs sm:text-sm md:text-base lg:text-base
                mb-2 sm:mb-3 md:mb-3 lg:mb-3
                group-hover:text-stone-300
                transition-colors duration-300 ease-out
                leading-relaxed
                line-clamp-2
              "
              >
                {cardDescription}
              </CardDescription>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="link"
                  className="
                    uppercase text-main
                    text-xs sm:text-sm md:text-base
                    font-medium tracking-wide
                    hover:text-main/80
                    transition-all duration-300 ease-out
                    p-0 h-auto
                    hover:underline
                    cursor-pointer
                  "
                >
                  Більше
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </motion.div>
            </CardHeader>
          </motion.div>
        </motion.div>

        <CardContent className="relative w-full h-full p-0 overflow-hidden rounded-lg">
          <motion.div
            variants={imageVariants}
            className="w-full h-full relative"
          >
            <Image
              fill
              sizes="(max-width: 640px) 320px,
                     (max-width: 768px) 384px,
                     (max-width: 1024px) 420px,
                     480px
              "
              className="
                object-cover w-full h-full
                rounded-lg sm:rounded-xl
                transition-transform duration-500 ease-out
              "
              src={cardImage}
              alt="Activity card"
            />

            <motion.div
              variants={overlayVariants}
              className="
                absolute inset-0
                bg-gradient-to-t from-black/60 via-black/20 to-transparent
                rounded-lg sm:rounded-xl
              "
            />
          </motion.div>
        </CardContent>

        <div
          className="
          absolute inset-0
          rounded-lg sm:rounded-xl
          ring-1 ring-white/10
          group-hover:ring-white/20
          transition-all duration-300 ease-out
          pointer-events-none
        "
        />
      </Card>
    </motion.div>
  );
};
