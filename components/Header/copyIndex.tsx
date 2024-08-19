"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import logo1 from "@/public/assets/logo1.svg";
import ThemeSwitcher from "../ThemeSwitcher";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import { headerLinks } from "./headerLinks";
import { buttonVariants } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function CopyIndex() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 sm:px-8 px-0">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <NavigationMenuItem className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="/"
              className="flex flex-row items-center space-x-2 rtl:space-x-reverse mr-5"
            >
              <Image src={logo1} alt=" Logo" height={38} width={38} />
              <span className="font-extrabold text-3xl font-clash-display">
                acs
              </span>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}

          <span className="flex md:hidden">
            <ThemeSwitcher />

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {headerLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={item.className}
                        aria-current={
                          item.ariaCurrent === undefined ? undefined : "page"
                        }
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/Gatcaa"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          <ul className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {headerLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={item.className}
                  aria-current={
                    item.ariaCurrent === undefined ? undefined : "page"
                  }
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default CopyIndex;
