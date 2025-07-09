import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InfoSection from "./InforSection";
import FactoryTourModal from './book';
import BakeryTabs from'./tabs'
import ProductDonationPage from './productDonationModal';

import HeroBg from "../../public/African Pattern 1.png";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {/* Background Pattern */}
        <Image
          src={HeroBg}
          alt="African Pattern Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 sm:object-cover lg:object-cover md:object-cover"
          quality={100}
          priority
        />

        {/* Text */}
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
           <Link href="#about"><button className="bg-[#B2904C] text-white text-base px-6 py-3 rounded hover:bg-[#a58344] transition-colors duration-300 shadow-lg">
            READ MORE
          </button></Link>
        </div>

        {/* Bread Images */}
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
      <section className="about max-w-6xl mx-auto px-4 py-16 flex flex-col items-center" id="about">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <h2 className="text-[rgba(38,27,108,1)] text-2xl md:text-3xl font-bold max-w-sm">
            About Bakers Inn
          </h2>
          <div className="max-w-xl space-y-4">
            <p className="text-gray-700 leading-relaxed">
              It all started back in the eighties when Bakers Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient and accessible answer to hungers call.
            </p>
            <Link href="/about"><button className="bg-[#B2904C] text-white text-base px-6 py-3 rounded hover:bg-[#a58344] transition-colors duration-300 shadow-lg">
              READ MORE
            </button></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full sm:justify-center sm:items-center sm:max-w-2xl">
          {["sandwitch", "meatpie", "doughnut", "bread"].map((item) => (
            <Image
              key={item}
              src={`/Images/${item}.png`}
              alt={item}
              className="rounded w-full h-full object-cover"
            />
          ))}
        </div>
      </section>

      {/* Product Range */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center">
        <h2 className="text-[rgba(38,27,108,1)] text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Product Range
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-8 sm:justify-center sm:items-center sm:max-w-2xl">
          {[
            { src: "bread", label: "Bread" },
            { src: "meatpie", label: "Meat Pies" },
            { src: "scones", label: "Scones" },
            { src: "donuts", label: "Donuts" },
          ].map(({ src, label }) => (
            <div key={src} className="relative rounded overflow-hidden">
              <Image
                src={`/Images/${src}.png`}
                alt={label}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-2 left-2 text-white font-semibold text-lg px-2 py-1">
                {label}
              </span>
            </div>
          ))}
        </div>
        <Link href="/products"><button className="bg-[#B2904C] text-white text-base px-6 py-3 rounded hover:bg-[#a58344] transition-colors duration-300 shadow-lg">
          VIEW COMPLETE RANGE
        </button></Link>
      </section>

      {/* Book Factory Tour */}
      <InfoSection
        title="Book A Factory Tour"
        text="Keen on seeing how Baker’s Inn products are made? Are you interested in a field trip for your school's class? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and we will get back to you."
        buttonText="BOOK FACTORY TOUR"
        imageSrc="/Images/info1.png"
        onButtonClick={() => setIsModalOpen(true)}
      />
      <FactoryTourModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Request A Donation */}
      <InfoSection
        title="Request A Donation"
        text="If you are hosting an event that aligns with what we donate to, we’re more than glad to help. Fill in the donation request form to let us know beforehand how we can increase your event’s impact in the local community."
        buttonText="REQUEST DONATION"
        imageSrc="/Images/info2.png"
        onButtonClick={() => setIsModalOpen(true)}
        reverse
      />
       <ProductDonationPage isOpen={true} onClose={() => {}} />

<section className="relative w-full mx-auto my-8 rounded-[10px] overflow-hidden min-h-[400px] sm:min-h-[600px]">
  {/* Background Image */}
  <Image
    src="/Images/mario.jpg"
    alt="Mario"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Overlay (optional) */}
  <div className="absolute inset-0 bg-black/20 z-10"></div>

  {/* Play Button */}
  <Link href="/kidsCorner">
    <button className="absolute bottom-4 right-4 z-20 bg-[#FF4655] text-white text-sm px-4 py-2 rounded shadow-md hover:bg-[#e33b4c] sm:text-base sm:px-6 sm:py-3">
      Play Games
    </button>
  </Link>
</section>


<section>
           <h2 className="text-[rgba(38,27,108,1)] text-2xl md:text-3xl font-bold  text-center ">
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
            width={300}
            height={400}
            className="w-[500px] h-auto object-contain"
          />
        </div>
      </section>
    </>
  );
}
