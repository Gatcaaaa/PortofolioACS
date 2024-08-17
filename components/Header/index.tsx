"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo1 from "@/public/assets/logo1.svg";
import { headerLinks } from "./headerLinks";
import ThemeSwitcher from "../ThemeSwitcher";
import { Button } from "../ui/button";
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
            <Link href="/contact">
              <Button
                type="button"
                className="text-white border-0 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-8 py-3 text-center dark:bg-[#FF5555] dark:hover:bg-[#be5555] dark:focus:ring-[#FF5555] rounded-md"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
