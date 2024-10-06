"use client";
import { navItems } from "@/constants";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // Toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 cursor-pointer">
            <Image
              className="mr-2"
              src={"/logo.webp"}
              alt="Logo"
              width={40}
              height={40}
            />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-[#D85D15]">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-3 items-center">
            <a href="#" className="py-2 px-3 border border-[#D85D15]  hover:text-[#D85D15]">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 "
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X className="text-[#D85D15]"/> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed right-0 z-20 mt-3 bg-neutral-900 w-full pt-5 pb-10 flex flex-col justify-center items-center lg:hidden">
            <ul className="pb-5 ">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 hover:text-[#D85D15]">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4">
              <Link href="#" className="py-2 px-3 border border-[#D85D15] hover:text-[#D85D15]">
                Sign In
              </Link>
              <Link
                href="#"
                className="py-2 px-3  bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
