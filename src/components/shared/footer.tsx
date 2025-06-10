import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Youtube, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-carbon-fiber">
      <div className="container mx-auto p-4 flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-13 justify-between lg:flex-col lg:gap-4 lg:items-start lg:justify-center lg:max-w-72">
          <Link href="/" className="flex items-center">
            <div className="w-20 h-20 relative">
              <Image
                src="/chaika-logo.svg"
                alt="Chaika Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Link>
          <p className="text-stone-400">
            Наш принцип – робити якісно. Інтереси споживача завжди на першому
            місці.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-white uppercase text-2xl lg:text-3xl">
            Сфери діяльності
          </p>

          <div className="flex flex-col gap-1.5">
            <p className="text-white underline">Агробізнес</p>
            <p className="text-white underline">Тваринництво</p>
            <p className="text-white underline">Садівництво</p>
            <p className="text-white underline">М’ясопереробка</p>
            <p className="text-white underline">Комбікорм</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4.5 lg:mt-0">
          <p className="text-white uppercase text-2xl lg:text-3xl">
            Наші магазини
          </p>

          <div className="flex flex-col gap-2">
            <div>
              <p className="text-white">м. Луцьк</p>
              <p className="text-stone-400 font-light">вул. Ковельська 15</p>
              <p className="text-stone-400 font-light">прос-т Перемоги 11</p>
            </div>

            <div>
              <p className="text-white">м. Тернопіль</p>
              <p className="text-stone-400 font-light">
                вул. Степана Бандери 22
              </p>
              <p className="text-stone-400 font-light">вул. Шептицького 232</p>
              <p className="text-stone-400 font-light">вул. Миру 4в</p>
            </div>

            <div>
              <p className="text-white">м. Рівне</p>
              <p className="text-stone-400 font-light">вул. Київська 18</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4.5 lg:mt-0">
          <p className="text-white uppercase text-2xl lg:text-3xl">Контакти</p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Phone className="text-main" />
              <span className="text-white">+ 380 50 656 9741</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-main" />
              <span className="text-white">chaika1222@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 mt-3">
              <div className="rounded bg-[#414141] size-8 flex items-center justify-center">
                <Youtube className="text-main" />
              </div>
              <div className="rounded bg-[#414141] size-8 flex items-center justify-center">
                <Facebook className="text-main" />
              </div>
              <div className="rounded bg-[#414141] size-8 flex items-center justify-center">
                <Instagram className="text-main" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
