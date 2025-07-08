'use client';

import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: {
    title: string;
    images: string[];
    prepTime: string;
    serves: string;
    ingredients: string[];
    directions: string[];
  };
}

export default function RecipeModal({ isOpen, onClose, recipe }: RecipeModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-2xl text-[#261B6C] hover:text-[#B2904C]"
                >
                  &times;
                </button>

                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* Left: Main Image */}
                  <div>
                    <Image
                      src={recipe.images[0]}
                      alt={recipe.title}
                      className="rounded-lg w-full h-auto"
                    />
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {recipe.images.map((img, idx) => (
                        <Image
                          key={idx}
                          src={img}
                          alt={`${recipe.title} ${idx}`}
                          className="rounded-lg w-full h-auto"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div>
                    <h2 className="text-2xl font-bold text-[#261B6C] mb-4">{recipe.title}</h2>
                    <div className="flex space-x-6 mb-4 text-[#B2904C] font-semibold">
                      <div className="flex items-center space-x-2">
                        <span>🕒</span>
                        <span>{recipe.prepTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🍽️</span>
                        <span>{recipe.serves}</span>
                      </div>
                    </div>

                    {/* Ingredients */}
                    <h3 className="text-xl font-semibold text-[#261B6C] mt-4 mb-2">Ingredients</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                      {recipe.ingredients.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    {/* Directions */}
                    <h3 className="text-xl font-semibold text-[#261B6C] mt-4 mb-2">Directions</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                      {recipe.directions.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

