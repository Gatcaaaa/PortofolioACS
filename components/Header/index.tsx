"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo1 from "@/public/assets/logo1.svg";
import { headerLinks } from "./headerLinks";
import ThemeSwitcher from "../ThemeSwitcher";
import { Button, buttonVariants } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 sm:px-8 px-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="/"
              className="flex flex-row items-center space-x-2 rtl:space-x-reverse mr-5"
            >
              <Image src={logo1} alt=" Logo" height={38} width={38} />
              <span className="font-extrabold text-3xl font-clash-display">
                acs
              </span>
            </Link>

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
          </div>
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <ThemeSwitcher />
            <a
              rel="noreferrer noopener"
              href="https://github.com/Gatcaaaa"
              target="_blank"
              className={`text-white border-0 ${buttonVariants({
                variant: "default",
              })} bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-8 py-3 text-center dark:bg-[#FF5555] dark:hover:bg-[#be5555] dark:focus:ring-[#FF5555] rounded-md font-clash-display`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>
          </div>

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
                    <Link
                      href="/"
                      className="flex flex-row items-center space-x-2 rtl:space-x-reverse mr-5"
                    >
                      <Image src={logo1} alt=" Logo" height={38} width={38} />
                      <span className="font-extrabold text-3xl font-clash-display">
                        acs
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {headerLinks.map((item, index) => (
                    <a
                      href={item.href}
                      className={item.className}
                      aria-current={
                        item.ariaCurrent === undefined ? undefined : "page"
                      }
                      key={index}
                    >
                      {item.text}
                    </a>
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
