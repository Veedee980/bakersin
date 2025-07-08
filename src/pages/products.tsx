// src/components/ProductRangeHeroSection.tsx

import React from 'react';
import Image from 'next/image';
import ProductTabs from './productTab';

const ProductRangeHeroSection: React.FC = () => {
  return (
    <>
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-end">
        {/* Background Image */}
        <Image
          src="/Images/p-hero.png" // IMPORTANT: Update this path to your product range banner image
          alt="Assortment of delicious baked cookies and biscuits"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority // Consider using priority for hero images for better LCP
        />

        {/* Overlay Content with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-8 sm:p-12">
          <div className="max-w-7xl mx-auto flex justify-between items-end w-full">
            {/* Left Text */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
              Our Product Range
            </h1>

            {/* Right Down Arrows */}
            <div className="flex flex-col items-center space-y-1 text-white opacity-90">
            </div>
          </div>
        </div>
      </section>
      <section>
        <ProductTabs />
      </section>
      
    </>
  );
};

export default ProductRangeHeroSection;