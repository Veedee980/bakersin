// src/components/RecipeCommunitySection.tsx

import React from 'react';
import Image from 'next/image';
import BakeryTabs from './tabs'; 

const RecipeCommunitySection: React.FC = () => {
  return (
    <>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-16">
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-text-heading-dark text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              The Finest of Bakers Tik Tok <br />
              Community Recipes
            </h2>

            <p className="text-text-paragraph-dark-gray text-base leading-relaxed mb-4">
              Make the finest croissants worthy of 🥐 Paris from your 🏠 home
            </p>
            <p className="text-text-heading-dark text-lg font-medium mb-4">
              #Croissant #Zimbabwe #Paris #Bakers_Inn
            </p>
            <div className="flex items-center text-text-heading-dark font-semibold text-lg">
              <Image
                src="/Images/r-icon.png" 
                alt="User Icon"
                width={50}
                height={50}
                className="mr-2 rounded-full"
              />
              <span className='text-[#B2904C]'>@The_Bakers_Inn</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative aspect-square">
              <Image
                src="/Images/recipe1.png" 
                alt="A perfectly baked croissant"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/Images/recipe2.png"
                alt="Full breakfast plate with eggs, bacon, beans, and toast"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/Images/recipe3.png"
                alt="Freshly sliced loaf of bread"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>

            {/* Bottom-Right Image: Factory/Loaves */}
            <div className="relative aspect-square">
              <Image
                src="/Images/recipe4.png" // IMPORTANT: Update path
                alt="Bread loaves moving on a conveyor belt in a factory"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-[rgba(38,27,108,1)] text-2xl md:text-3xl font-bold  text-center ">
          OUR RECIPES
        </h2>
        <BakeryTabs />
      </section>
    </>
  );
};

export default RecipeCommunitySection;