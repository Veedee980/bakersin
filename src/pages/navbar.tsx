'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/bakers-inn-category 1.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Lock body scroll when menu is open
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
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/recipes">Recipes</Link>
            <Link href="/kidsCorner">Kid's Corner</Link>
            <Link href="/contact">
              <button className="bg-[#B2904C] text-white px-6 py-2 rounded font-medium">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-Screen Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-[#261B6C] transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-[60] md:hidden`}
      >
        <Link href="/about" onClick={closeMenu}>About Us</Link>
        <Link href="/products" onClick={closeMenu}>Products</Link>
        <Link href="/recipes" onClick={closeMenu}>Recipes</Link>
        <Link href="/kidsCorner" onClick={closeMenu}>Kid's Corner</Link>
        <Link href="/contact" onClick={closeMenu}>
          <button className="bg-[#B2904C] text-white px-8 py-3 rounded font-medium">
            CONTACT US
          </button>
        </Link>
      </div>
    </>
  );
}




