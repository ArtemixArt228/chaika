"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

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

import { useScrollProgress } from "@/hooks/useScrollProgress";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants/routes";

import { MainButton } from "./button";

export const Header = () => {
  const pathname = usePathname();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const scrollProgress = useScrollProgress(500);

  // Interpolate colors
  const r = Math.round(255 * (1 - scrollProgress)); // white → black
  const g = Math.round(255 * (1 - scrollProgress)); // white → black
  const b = Math.round(255 * (1 - scrollProgress)); // white → black
  const a = 0.6 * scrollProgress + 0.2 * (1 - scrollProgress); // opacity 0.2 → 0.8

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
      }}
    >
      <div className="container mx-auto py-4 px-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center z-100">
          <div className="w-16 h-15 relative">
            <Image
              src="/chaika-logo.svg"
              alt="Chaika Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Link>

        <Sheet open={isSheetOpen} onOpenChange={(open) => setIsSheetOpen(open)}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn("lg:hidden", {
                hidden: isSheetOpen,
              })}
            >
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

            <SheetClose className="absolute top-7 right-2">
              <XIcon className="h-10 w-10 text-white" />
            </SheetClose>

            <div className="grid gap-4 text-white justify-end">
              <Link
                href="/"
                className={cn(
                  "flex w-full items-center justify-end text-2xl",
                  pathname === ROUTES.HOME && "text-main font-semibold",
                )}
                prefetch={false}
              >
                Головна
              </Link>
              <Link
                href="/about"
                className={cn(
                  "flex w-full items-center justify-end text-2xl",
                  pathname === ROUTES.ABOUT && "text-main font-semibold",
                )}
                prefetch={false}
              >
                Про нас
              </Link>
              <Link
                href="/activity-areas"
                className={cn(
                  "flex w-full items-center justify-end text-2xl",
                  pathname === ROUTES.ACTIVITY_AREAS &&
                    "text-main font-semibold",
                )}
                prefetch={false}
              >
                Сфери діяльності
              </Link>
              <Link
                href="/products"
                className={cn(
                  "flex w-full items-center justify-end text-2xl",
                  pathname === ROUTES.PRODUCTS && "text-main font-semibold",
                )}
                prefetch={false}
              >
                Мʼясна продукція
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-8">
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className={cn(
                  "text-white uppercase",
                  pathname === ROUTES.HOME && "text-main font-bold",
                )}
                prefetch={false}
              >
                Головна
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/about"
                className={cn(
                  "text-white uppercase",
                  pathname === ROUTES.ABOUT && "text-main font-bold",
                )}
                prefetch={false}
              >
                Про нас
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/activity-areas"
                className={cn(
                  "text-white uppercase",
                  pathname === ROUTES.ACTIVITY_AREAS && "text-main font-bold",
                )}
                prefetch={false}
              >
                Сфери діяльності
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/products"
                className={cn(
                  "text-white uppercase",
                  pathname === ROUTES.PRODUCTS && "text-main font-bold",
                )}
                prefetch={false}
              >
                Мʼясна продукція
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="#contact_us" className="hidden lg:flex">
          <MainButton text="Зв'язатись з нами" className="hidden lg:flex" />
        </Link>
      </div>
    </header>
  );
};
