// src/components/KidsCornerSection.tsx

import React from 'react';
import Image from 'next/image';
import GameCard from './InfoBlock'

const KidsCornerSection: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-7xl mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">

                    {/* Kid's Corner Text */}
                    <div
                        className="absolute"
                        style={{
                            top: '15%',
                            left: '5%',
                            width: '40%',
                            height: 'auto',
                            maxWidth: '350px',
                        }}
                    >
                        <Image
                            src="/Images/k-text.png"
                            alt="Kid's Corner text"
                            layout="responsive"
                            width={350}
                            height={150}
                            objectFit="contain"
                            priority
                        />
                    </div>

                    {/* Left Characters */}
                    <div
                        className="absolute"
                        style={{
                            bottom: '0',
                            left: '30%',
                            width: '30%',
                            height: 'auto',
                            maxWidth: '300px',
                        }}
                    >
                        <Image
                            src="/Images/k-c2.png"
                            alt="Two female characters from Kid's Corner"
                            layout="responsive"
                            width={300}
                            height={400}
                            objectFit="contain"
                        />
                    </div>

                    {/* Right Characters Group */}
                    <div
                        className="absolute"
                        style={{
                            bottom: '0',
                            right: '0',
                            width: '55%',
                            height: 'auto',
                            maxWidth: '600px',
                        }}
                    >
                        <Image
                            src="/Images/k-c1.png"
                            alt="Group of diverse characters including a car and a dragon"
                            layout="responsive"
                            width={600}
                            height={500}
                            objectFit="contain"
                        />
                    </div>
                </div>
            </section>

            {/* Game Cards Section */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col gap-8">
                   <GameCard
  bgColor="bg-[#018BF1]"
  title="Spaceship Maze"
  description="Navigate your spaceship out of the maze! Watch out for obstacles and find the fastest route to the finish line."
  buttonText="Run Game"
  buttonBgColor="bg-[#B2904C]"
  buttonTextColor="text-white"
  imageSrc="/Images/game1.png"
  href='https://toytheater.com/maze/'
  imageAlt="Spaceship Maze Game"
/>

<GameCard
  bgColor="bg-[#FF4655]"
  title="Biddy Way"
  description="Roll through an exciting game. In Biddy Way, players control an adventurous character, navigating through challenging levels filled with obstacles and puzzles. Collect coins, defeat enemies, and unlock new abilities as they journey through vibrant worlds. Test your reflexes and strategic thinking to conquer Biddy Way!"
  buttonText="Run Game"
  buttonBgColor="bg-white"
  buttonTextColor="text-[#FF4655]"
  imageSrc="/Images/game2.png"
  href='https://www.addictinggames.com/action/risky-way#url'
  imageAlt="Biddy Way Game Characters"
/>

<GameCard
  bgColor="bg-[#261B6C]"
  title="Pacman"
  description="Step into the nostalgic world of Pacman, where you navigate a maze, gobbling up pellets and avoiding colorful ghosts. Use power pellets to turn the tables on your spectral pursuers and rack up high scores in this classic arcade adventure. Can you clear the maze and conquer the high score?"
  buttonText="Run Game"
  buttonBgColor="bg-[#B2904C]"
  buttonTextColor="text-white"
  href='https://www.pacman1.net/'
  imageSrc="/Images/game3.png"
  imageAlt="Pacman Game Character"
/>

                </div>
            </section>
        </>
    );
};

export default KidsCornerSection;
