'use client';

import React, { useState } from "react";
import Image from "next/image";

type Recipe = {
  title: string;
  images: string[];
  prepTime: string;
  serves: string;
  ingredients: string[];
  directions: string[];
};

type TabCategory = "breakfast" | "lunch" | "dinner";

const recipesByTab: Record<TabCategory, Recipe[]> = {
  breakfast: [
    {
      title: "Pancakes",
      images: ["/images/pancakes.jpg"],
      prepTime: "15 mins",
      serves: "2",
      ingredients: ["2 cups flour", "1 egg", "1 cup milk"],
      directions: ["Mix ingredients", "Cook on griddle"],
    },
  ],
  lunch: [
    {
      title: "Sandwich",
      images: ["/images/sandwich.jpg"],
      prepTime: "10 mins",
      serves: "1",
      ingredients: ["2 slices bread", "1 tomato", "Lettuce"],
      directions: ["Assemble ingredients", "Serve fresh"],
    },
  ],
  dinner: [
    {
      title: "Pasta",
      images: ["/images/pasta.jpg"],
      prepTime: "25 mins",
      serves: "3",
      ingredients: ["200g pasta", "Sauce", "Cheese"],
      directions: ["Boil pasta", "Add sauce", "Serve with cheese"],
    },
  ],
};

export default function BakeryTabs() {
  const [activeTab, setActiveTab] = useState<TabCategory>("breakfast");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleTabChange = (tab: TabCategory) => {
    setActiveTab(tab);
    setSelectedRecipe(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {(["breakfast", "lunch", "dinner"] as TabCategory[]).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-4 py-2 rounded font-semibold ${
              activeTab === tab
                ? "bg-[#B2904C] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Recipe List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipesByTab[activeTab].map((recipe) => (
          <div
            key={recipe.title}
            onClick={() => setSelectedRecipe(recipe)}
            className="cursor-pointer bg-white shadow rounded-lg p-4 hover:shadow-md transition"
          >
            {recipe.images[0] && (
              <Image
                src={recipe.images[0]}
                alt={recipe.title}
                width={400}
                height={250}
                className="rounded mb-2 object-cover w-full h-48"
              />
            )}
            <h3 className="text-lg font-bold text-[#261B6C]">{recipe.title}</h3>
            <p className="text-sm text-gray-600">Prep Time: {recipe.prepTime}</p>
          </div>
        ))}
      </div>

      {/* Selected Recipe Details */}
      {selectedRecipe && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#261B6C] mb-2">
            {selectedRecipe.title}
          </h2>
          <p className="text-gray-700 mb-1">Prep Time: {selectedRecipe.prepTime}</p>
          <p className="text-gray-700 mb-3">Serves: {selectedRecipe.serves}</p>

          <h3 className="text-lg font-semibold mb-1 text-[#B2904C]">Ingredients:</h3>
          <ul className="list-disc list-inside mb-3 text-gray-800">
            {selectedRecipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-1 text-[#B2904C]">Directions:</h3>
          <ol className="list-decimal list-inside text-gray-800">
            {selectedRecipe.directions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}


