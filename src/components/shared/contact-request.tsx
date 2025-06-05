import React from "react";
import { MailIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { MainButton } from "@/components/shared/button";

export const ContactRequest = () => {
  return (
    <section id="contact_us" className="container mx-auto mb-20">
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        Залиште вашу пошту і ми зв’яжемось з вами
      </h4>
      <p className="text-stone-400 text-xl text-center">
        Будьте першими в тренді та співпрацюйте з нами. Давайте розвивати
        українсьий бізнес разом!
      </p>

      <div className="max-w-3xl w-full mx-auto">
        <div className="relative flex justify-center items-center rounded-md border bg-night-rider focus-within:ring-1 focus-within:ring-ring px-4 py-2">
          <MailIcon className="h-5 w-5 text-white" />
          <Input
            type="email"
            placeholder="Email"
            className="border-0 focus-visible:ring-0 shadow-none w-full text-white"
          />
          <MainButton text="Надіслати" />
        </div>
      </div>
    </section>
  );
};
