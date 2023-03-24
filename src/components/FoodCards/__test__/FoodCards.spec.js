import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import FoodCards from '../FoodCards.jsx';

const foods = {
  meals: [
    {
      strMeal: 'Chick-Fil-A Sandwich',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg',
      idMeal: '53016',
    },
  ],
};

describe('FoodCards componente', () => {
  it('Se renderizan todas las food cards', () => {
    render(<FoodCards foods={foods} />);
    const foodCards = screen.getAllByTestId('food-card');
    expect(foodCards).toHaveLength(foods.meals.length);
  });
});
