'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/bakers-inn-category 1.png";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // detect current route

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Utility to determine if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex items-center justify-between px-6 py-4 sm:px-8 md:px-16 lg:px-24">
          <Link href="/" onClick={closeMenu}>
            <Image src={Logo} alt="Baker's Inn Logo" width={150} height={50} priority />
          </Link>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#261B6C] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-semibold text-[#261B6C]">
            <Link
              href="/about"
              className={isActive("/about") ? "font-bold underline underline-offset-4" : ""}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className={isActive("/products") ? "font-bold underline underline-offset-4" : ""}
            >
              Products
            </Link>
            <Link
              href="/recipes"
              className={isActive("/recipes") ? "font-bold underline underline-offset-4" : ""}
            >
              Recipes
            </Link>
            <Link
              href="/kidsCorner"
              className={isActive("/kidsCorner") ? "font-bold underline underline-offset-4" : ""}
            >
              Kids Corner
            </Link>
            <Link href="/contact">
              <button className="bg-[#B2904C] text-white px-6 py-2 rounded font-medium">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-[#261B6C] transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-[60] md:hidden`}
      >
        <Link
          href="/about"
          onClick={closeMenu}
          className={isActive("/about") ? "font-bold underline underline-offset-4" : ""}
        >
          About Us
        </Link>
        <Link
          href="/products"
          onClick={closeMenu}
          className={isActive("/products") ? "font-bold underline underline-offset-4" : ""}
        >
          Products
        </Link>
        <Link
          href="/recipes"
          onClick={closeMenu}
          className={isActive("/recipes") ? "font-bold underline underline-offset-4" : ""}
        >
          Recipes
        </Link>
        <Link
          href="/kidsCorner"
          onClick={closeMenu}
          className={isActive("/kidsCorner") ? "font-bold underline underline-offset-4" : ""}
        >
          Kids Corner
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          <button className="bg-[#B2904C] text-white px-8 py-3 rounded font-medium">
            CONTACT US
          </button>
        </Link>
      </div>
    </>
  );
}





