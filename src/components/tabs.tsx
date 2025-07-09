"use client";
import React from "react";
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
  const [value, setValue] = React.useState<number>(0);
  const [selectedRecipe, setSelectedRecipe] = React.useState<Recipe | null>(
    null
  );

  const handleTabChange = (tabIndex: number) => {
    setValue(tabIndex);
    setSelectedRecipe(null);
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      {/* Example UI */}
      <div>
        <button onClick={() => handleTabChange(0)}>Breakfast</button>
        <button onClick={() => handleTabChange(1)}>Lunch</button>
        <button onClick={() => handleTabChange(2)}>Dinner</button>
      </div>

      <div>
        {recipesByTab[["breakfast", "lunch", "dinner"][value] as TabCategory].map(
          (recipe) => (
            <div key={recipe.title} onClick={() => handleSelectRecipe(recipe)}>
              <h3>{recipe.title}</h3>
            </div>
          )
        )}
      </div>

      {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.title}</h2>
          <p>Prep Time: {selectedRecipe.prepTime}</p>
          <p>Serves: {selectedRecipe.serves}</p>
        </div>
      )}
    </div>
  );
}

