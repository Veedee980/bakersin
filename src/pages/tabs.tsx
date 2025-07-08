'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RecipeModal from './RecipeModal';

const recipesByTab = [
  {
    label: 'For Kids',
    recipe: {
      title: 'Shwarma Sandwich',
      images: [
        '/Images/sandwitch.png',
        '/Images/sandwitch.png',
        '/Images/sandwitch.png',
      ],
      prepTime: '5 Minutes',
      serves: '6 People',
      ingredients: [
        '½ cup olive oil',
        '½ cup ranch dressing',
        '3 tbsp Worcestershire sauce',
        '1 tbsp minced fresh rosemary',
        '2 tsp salt',
        '1 tsp lemon juice',
        '1 tsp white vinegar',
        '¼ tsp ground black pepper',
      ],
      directions: [
        'In a medium bowl, mix olive oil, ranch dressing, Worcestershire sauce, rosemary, lemon juice, white vinegar, salt, pepper, and sugar. Let stand for 5 minutes.',
        'Place chicken in the bowl, and stir to coat with the marinade. Cover and refrigerate for 30 minutes.',
        'Preheat the grill for medium-high heat. Thread chicken onto skewers and discard marinade.',
        'Lightly oil the grill grate. Grill for 8-12 minutes, or until the chicken is no longer pink in the center.',
      ],
    },
  },
  {
    label: 'For Vegans',
    recipe: {
      title: 'Sweet Shortbread',
      images: [
        '/Images/r-icon.png',
        '/Images/r-icon.png',
        '/Images/r-icon.png',
      ],
      prepTime: '15 Minutes',
      serves: '4 People',
      ingredients: [
        '1 cup flour',
        '½ cup vegan butter',
        '¼ cup sugar',
        '1 tsp vanilla extract',
        'Pinch of salt',
      ],
      directions: [
        'Preheat the oven to 350°F (175°C).',
        'Mix flour, sugar, and salt in a bowl.',
        'Add vegan butter and vanilla, mix until dough forms.',
        'Press into a pan, bake for 20 minutes or until golden.',
      ],
    },
  },
  {
    label: 'For Family',
    recipe: {
      title: 'Salmon Strips',
      images: [
        '/Images/salmon.png',
        '/Images/salmon.png',
        '/Images/salmon.png',
      ],
      prepTime: '20 Minutes',
      serves: '5 People',
      ingredients: [
        '500g salmon fillets',
        '2 tbsp olive oil',
        '1 lemon (juiced)',
        'Salt and pepper to taste',
        'Fresh dill for garnish',
      ],
      directions: [
        'Cut salmon into strips.',
        'Marinate with olive oil, lemon juice, salt, and pepper for 10 minutes.',
        'Heat a grill pan and cook salmon strips for 2-3 minutes on each side.',
        'Garnish with fresh dill and serve with lemon wedges.',
      ],
    },
  },
];

export default function BakeryTabs() {
  const [value, setValue] = React.useState(0);
  const [selectedRecipe, setSelectedRecipe] = React.useState<any>(null);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => setValue(newValue);

  const openModal = () => setSelectedRecipe(recipesByTab[value].recipe);
  const closeModal = () => setSelectedRecipe(null);

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', mt: 8 }}>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ style: { backgroundColor: '#B2904C', height: '4px' } }}
      >
        {recipesByTab.map((tab, idx) => (
          <Tab
            key={idx}
            label={tab.label}
            sx={{
              fontWeight: value === idx ? 'bold' : 'normal',
              color: value === idx ? '#261B6C' : '#6B5D6D',
              textTransform: 'none',
              fontSize: '1rem',
            }}
          />
        ))}
      </Tabs>

      {/* Cards */}
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Box
            key={idx}
            className="bg-white rounded-lg shadow-lg max-w-[280px] w-full text-center"
          >
            <img
              src={recipesByTab[value].recipe.images[idx]}
              alt={recipesByTab[value].recipe.title}
              className="rounded-t-lg w-full h-auto"
            />
            <Box p={3}>
              <h4 className="text-[#261B6C] font-bold text-lg mb-2">
                {recipesByTab[value].recipe.title}
              </h4>
              <p className="text-sm text-gray-700 mb-1">
                Prep Time: <span className="text-[#B2904C] font-semibold">{recipesByTab[value].recipe.prepTime}</span>
              </p>
              <p className="text-sm text-gray-700 mb-4">
                Serves: <span className="text-[#B2904C] font-semibold">{recipesByTab[value].recipe.serves}</span>
              </p>
              <button
                onClick={openModal}
                className="bg-[#B2904C] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#a58344] transition-colors duration-300 mx-auto"
              >
                <ArrowForwardIosIcon fontSize="small" style={{ color: 'white' }} />
              </button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Modal */}
      {selectedRecipe && (
        <RecipeModal
          isOpen={!!selectedRecipe}
          onClose={closeModal}
          recipe={selectedRecipe}
        />
      )}
    </Box>
  );
}

