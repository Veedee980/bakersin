// src/components/GameCard.tsx

import React from 'react';
import Image from 'next/image';

interface GameCardProps {
  bgColor: string; // Tailwind color class for background, e.g., 'bg-game-blue'
  title: string;
  description: string;
  buttonText: string;
  buttonBgColor: string; // Tailwind color class for button background, e.g., 'bg-button-game-yellow'
  buttonTextColor?: string; // Tailwind color class for button text, defaults to 'text-white'
  imageSrc: string;
  imageAlt: string;
  href:string;
}

const GameCard: React.FC<GameCardProps> = ({
  bgColor,
  title,
  description,
  buttonText,
  buttonBgColor,
  href,
  buttonTextColor = 'text-white', // Default button text color is white
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className={`rounded-sm shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-6 sm:p-8 md:p-10 ${bgColor}`}>
      {/* Left Content: Text and Button */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0 md:pr-8">
        <h3 className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-white text-base leading-relaxed mb-6">
          {description}
        </p>
        <a
          href={href}
          className={`py-3 px-8 font-bold transition-colors duration-300 ${buttonBgColor} ${buttonTextColor} hover:opacity-90`}
        >
          {buttonText}
        </a>
      </div>

      {/* Right Content: Image */}
      <div className="w-full md:w-1/2 relative h-48 sm:h-64 md:h-72 lg:h-80 flex justify-center items-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="contain" // Use 'contain' to ensure the entire illustration is visible
          quality={90}
        />
      </div>
    </div>
  );
};

export default GameCard;