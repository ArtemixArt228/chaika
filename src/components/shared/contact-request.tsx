"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { MainButton } from "@/components/shared/button";

export const ContactRequest = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section
      id="contact_us"
      className="container mx-auto mb-16 sm:mb-20 lg:mb-24 xl:mb-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12 sm:mb-16 lg:mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
      >
        <motion.h2
          className="text-white uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 font-bold leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Залиште вашу пошту і ми зв&#39;яжемось з вами
        </motion.h2>

        <motion.p
          className="text-stone-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center max-w-sm sm:max-w-xl lg:max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Будьте першими в тренді та співпрацюйте з нами. Давайте розвивати
          українсьий бізнес разом!
        </motion.p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        className="max-w-sm sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Desktop Form */}
        <motion.div
          className="relative hidden md:flex justify-center items-center rounded-lg lg:rounded-xl bg-night-rider px-4 lg:px-6 py-3 lg:py-4 shadow-lg hover:shadow-xl transition-all duration-300"
          animate={{
            boxShadow: isFocused
              ? "0 0 0 2px rgba(242, 151, 31.9, 1)"
              : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <MailIcon className="size-6 lg:size-8 text-white mr-3 lg:mr-4" />
          </motion.div>

          <Input
            type="email"
            placeholder="Ел. пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="border-0 focus-visible:ring-0 shadow-none w-full text-white placeholder:text-stone-400 text-base lg:text-lg bg-transparent outline-none"
          />

          <MainButton
            text="Надіслати"
            className="py-2 lg:py-3 px-6 lg:px-8 ml-2 lg:ml-4 text-sm lg:text-base font-semibold"
          />
        </motion.div>

        {/* Mobile Form */}
        <div className="md:hidden space-y-3 sm:space-y-4">
          <motion.div
            className="relative flex items-center rounded-lg bg-night-rider px-4 py-3 sm:py-4 shadow-lg"
            animate={{
              boxShadow: isFocused
                ? "0 0 0 2px rgba(242, 151, 31.9, 1)"
                : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <MailIcon className="size-5 sm:size-6 text-white mr-3" />
            </motion.div>

            <Input
              type="email"
              placeholder="Ел. пошта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="border-0 focus-visible:ring-0 shadow-none w-full text-white placeholder:text-stone-400 text-base sm:text-lg bg-transparent outline-none"
            />
          </motion.div>

          <MainButton
            text="Надіслати"
            className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};
