'use client';
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

const tabCategories: TabCategory[] = ["breakfast", "lunch", "dinner"];

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
  const [selectedRecipe, setSelectedRecipe] = React.useState<Recipe | null>(null);

  const handleTabChange = (tabIndex: number) => {
    setValue(tabIndex);
    setSelectedRecipe(null);
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const currentCategory = tabCategories[value];

  return (
    <div>
      <div>
        {tabCategories.map((category, idx) => (
          <button
            key={category}
            onClick={() => handleTabChange(idx)}
            style={{
              fontWeight: value === idx ? "bold" : "normal",
              marginRight: 8,
            }}
            type="button"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div>
        {recipesByTab[currentCategory].map((recipe) => (
          <div
            key={recipe.title}
            onClick={() => handleSelectRecipe(recipe)}
            style={{
              cursor: "pointer",
              border: selectedRecipe?.title === recipe.title ? "2px solid #333" : "1px solid #ccc",
              margin: "8px 0",
              padding: "8px",
              borderRadius: "4px",
            }}
            tabIndex={0}
            role="button"
            aria-pressed={selectedRecipe?.title === recipe.title}
          >
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div style={{ marginTop: 16 }}>
          <h2>{selectedRecipe.title}</h2>
          <p>Prep Time: {selectedRecipe.prepTime}</p>
          <p>Serves: {selectedRecipe.serves}</p>
        </div>
      )}
    </div>
  );
}

