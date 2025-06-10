import React from "react";
import { MailIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { MainButton } from "@/components/shared/button";

export const ContactRequest = () => {
  return (
    <section id="contact_us" className="container mx-auto mb-20">
      <h4 className="text-center text-white uppercase text-2xl md:text-4xl max-w-lg mx-auto mb-8">
        Залиште вашу пошту і ми зв’яжемось з вами
      </h4>
      <p className="text-stone-400 text-base md:text-xl text-center max-w-xl mx-auto mb-16">
        Будьте першими в тренді та співпрацюйте з нами. Давайте розвивати
        українсьий бізнес разом!
      </p>

      <div className="max-w-3xl w-full mx-auto px-3 md:px-0">
        <div className="relative flex justify-center items-center rounded-md bg-night-rider px-4 py-2">
          <MailIcon className="lg:size-8 text-white" />
          <Input
            type="email"
            placeholder="Ел. пошта"
            className="border-0 focus-visible:ring-0 shadow-none w-full text-white"
          />
          <MainButton text="Надіслати" className="py-2 px-8 hidden md:flex" />
        </div>

        <MainButton text="Надіслати" className="flex mt-3 w-full md:hidden" />
      </div>
    </section>
  );
};
