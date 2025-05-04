import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { MainButton } from "./button";
export const Header = () => {
  return (
    <header className="bg-white/20 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto py-4 px-2.5 flex items-center justify-between">
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

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <MenuIcon className="text-white size-8" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full bg-black/30 border-0 !pt-23 !px-6"
          >
            <SheetTitle className="sr-only">Меню</SheetTitle>
            <SheetDescription className="sr-only">
              Меню для телефонів
            </SheetDescription>

            <SheetClose className="absolute top-9 right-6">
              <XIcon className="h-10 w-10 text-white" />
            </SheetClose>

            <div className="grid gap-2.5 text-white justify-end">
              <Link
                href="#"
                className="flex w-full items-center py-2 justify-end "
                prefetch={false}
              >
                Головна
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 justify-end"
                prefetch={false}
              >
                Про нас
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 justify-end"
                prefetch={false}
              >
                Сфери діяльності
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 justify-end"
                prefetch={false}
              >
                Мʼясна продукція
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-10">
            <NavigationMenuLink asChild>
              <Link href="#" className="!text-white uppercase" prefetch={false}>
                Головна
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="!text-white uppercase" prefetch={false}>
                Про нас
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="!text-white uppercase" prefetch={false}>
                Сфери діяльності
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="!text-white uppercase" prefetch={false}>
                Мʼясна продукція
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>

        <Link className="hidden lg:block" href="/contact">
          <MainButton text="Зв'язатись з нами" />
        </Link>
      </div>
    </header>
  );
};
