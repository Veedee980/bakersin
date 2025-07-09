'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InfoSection from "./InforSection";
import FactoryTourModal from './book';
import ProductDonationModal from '../components/productDonationModal'; // ✅ Only import what you use
import BakeryTabs from '../components/tabs';

import HeroBg from "../../public/African Pattern 1.png";

export default function HomePage() { // ✅ Use a clear component name
  const [isFactoryModalOpen, setIsFactoryModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden flex justify-between items-center px-4 py-16 md:px-15 md:py-20 lg:px-20 lg:py-24"
        style={{
          backgroundColor: "#261B6C",
          borderRadius: "12px",
          margin: "40px auto",
          maxWidth: "95%",
          minHeight: "480px",
        }}
      >
        <Image
          src={HeroBg}
          alt="African Pattern Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 sm:object-cover lg:object-cover md:object-cover"
          quality={100}
          priority
        />
        <div className="relative z-10 w-full md:w-1/2 lg:w-2/5 xl:w-[450px] text-center md:text-left pr-0 md:pr-8 lg:pr-12">
          <h1 className="text-[32px] sm:text-[40px] md:text-5xl text-white font-bold leading-tight mb-4">
            Bringing you the{" "}
            <span className="underline decoration-[#B2904C] decoration-[6px]">best value</span>{" "}
            at the{" "}
            <span className="underline decoration-[#B2904C] decoration-[6px]">best prices</span>.
          </h1>
          <p className="text-[#d3d3d3] text-base mb-6">
            The freshest sandwiches you can make are with Bakers Inn soft white loaf.
          </p>
          <Link href="#about">
            <button
              type="button"
              className="bg-[#B2904C] text-white text-base px-6 py-3 rounded hover:bg-[#a58344] transition-colors duration-300 shadow-lg"
            >
              READ MORE
            </button>
          </Link>
        </div>
        <div className="relative hidden md:flex flex-shrink-0 w-[600px] h-[400px] items-center justify-center z-10">
          <Image
            src="/Images/hero-br.png"
            alt="Premium Soft White"
            width={240}
            height={330}
            className="absolute top-[40px] left-[60px] w-[600px] h-auto"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-[rgba(38,27,108,1)] text-2xl md:text-3xl font-bold mb-4">
          About Bakers Inn
        </h2>
        <p className="text-gray-700 mb-4">
          It all started back in the eighties when Bakers Inn was just a small confectionery company
          that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a
          nourishing, convenient and accessible answer to hunger’s call.
        </p>
        <Link href="/about">
          <button
            type="button"
            className="bg-[#B2904C] text-white text-base px-6 py-3 rounded hover:bg-[#a58344] transition-colors duration-300 shadow-lg"
          >
            READ MORE
          </button>
        </Link>
      </section>

      {/* Book Factory Tour */}
      <InfoSection
        title="Book A Factory Tour"
        text="Keen on seeing how Baker’s Inn products are made? Are you interested in a field trip for your school's class? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and we will get back to you."
        buttonText="BOOK FACTORY TOUR"
        imageSrc="/Images/info1.png"
        onButtonClick={() => setIsFactoryModalOpen(true)}
      />
      <FactoryTourModal isOpen={isFactoryModalOpen} onClose={() => setIsFactoryModalOpen(false)} />

      {/* Request A Donation */}
      <InfoSection
        title="Request A Donation"
        text="If you are hosting an event that aligns with what we donate to, we’re more than glad to help. Fill in the donation request form to let us know beforehand how we can increase your event’s impact in the local community."
        buttonText="REQUEST DONATION"
        imageSrc="/Images/info2.png"
        onButtonClick={() => setIsDonationModalOpen(true)}
        reverse
      />
      <ProductDonationModal
  isOpen={isDonationModalOpen}
  onClose={() => setIsDonationModalOpen(false)}
/>
      <section className="relative w-full mx-auto my-8 rounded-[10px] overflow-hidden min-h-[400px] sm:min-h-[600px]">
        <Image
          src="/Images/mario.jpg"
          alt="Mario"
          className="absolute inset-0 w-full h-full object-cover z-0"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <Link href="/kidsCorner">
          <button className="absolute bottom-4 right-4 z-20 bg-[#FF4655] text-white text-sm px-4 py-2 rounded shadow-md hover:bg-[#e33b4c] sm:text-base sm:px-6 sm:py-3">
            Play Games
          </button>
        </Link>
      </section>

<section>
  <h2 className="text-[rgba(38,27,108,1)] text-2xl md:text-3xl font-bold text-center mb-4">
    Bakers Recipe
  </h2>
  <BakeryTabs />
</section>


      {/* Promotions Section */}
      <section
        className="relative w-full overflow-hidden flex justify-between items-center px-4 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24"
        style={{
          backgroundColor: "#B2904C",
          borderRadius: "12px",
          margin: "40px auto",
          maxWidth: "95%",
          minHeight: "320px",
        }}
      >
        <div className="relative z-10 w-full md:w-1/2 lg:w-[500px] text-center md:text-left pr-0 md:pr-8 lg:pr-12">
          <h2 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-white font-bold leading-tight mb-6">
            Get Notified About <br className="hidden sm:block" /> Promotions We Offer
          </h2>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="your email"
              className="flex-grow p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-[#261B6C] hover:bg-[#1f145a] text-white font-semibold py-3 px-6 rounded transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="relative hidden md:flex flex-shrink-0 w-[360px] h-[260px] lg:w-[440px] lg:h-[300px] items-end justify-end z-10">
          <Image
            src="/Images/group-1.png"
            alt="Bread Variant"
            width={500}
            height={400}
            className="w-[500px] h-auto object-contain"
          />
        </div>
      </section>

    </>
  );
}

