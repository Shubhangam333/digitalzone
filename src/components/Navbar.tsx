"use client";
import { Button } from "@/components/ui/button";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

interface navItemProps {
  link: string;
  name: string;
}

const navItems: navItemProps[] = [
  {
    link: "/",
    name: "home",
  },
  {
    link: "/shop",
    name: "shop",
  },
  {
    link: "/about",
    name: "about",
  },
];

export default function Navbar() {
  const [show, setShow] = useState<Boolean>(false);
  return (
    <>
      <header className="p-2 flex fixed top-0 left-0 right-0 z-[1000] bg-background justify-between items-center h-16">
        <hgroup>
          <Link
            href="/"
            className="font-extrabold sm:text-3xl text-2xl cursor-pointer"
          >
            Digital <span className="text-primary">Zone</span>
          </Link>
        </hgroup>
        <nav className="sm:block hidden">
          <ul className="flex justify-between items-center w-[15rem] text-lg font-bold">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="hover:text-primary  capitalize transition-all duration-300"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center font-bold">
          <Button variant="outline" size="icon">
            <div className="h-full bg-gray-100 flex justify-center items-center">
              <div className="relative">
                <div className="t-0 absolute left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-primary p-2 text-xs text-white">
                    3
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="file: mt-2 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </Button>
          <Button variant="outline" className="sm:text-lg text-md">
            Login
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="sm:hidden"
            onClick={() => setShow(!show)}
          >
            <AlignLeft />
          </Button>
        </div>
      </header>
      {show && <MobileNav />}
    </>
  );
}

function MobileNav() {
  return (
    <nav className="sm:hidden block  w-full bg-primary mt-16">
      <motion.ul
        initial={{ y: "-100%", opacity: 0 }} // Initial position above the viewport
        animate={{ y: 0, opacity: 1 }} // Final position and opacity
        exit={{ y: "-100%", opacity: 0 }} // Animation when component is removed
        transition={{ duration: 0.3 }} // Animation duration
        className="flex flex-col w-full  justify-center items-center text-lg font-bold"
      >
        {navItems.map((item, i) => (
          <li
            key={i}
            className="hover:text-primary w-full text-white flex justify-center items-center capitalize transition-all duration-300 h-12 hover:bg-white"
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
}
