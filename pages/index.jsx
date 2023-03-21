import React from 'react';
import Layout from '../src/Layout';
import SearchBar from '../src/components/SearchBar.jsx';
import Slider from '../src/components/Slider/Slider.jsx';
import RecipeData from '../public/MealDB-Api/Recipes.json';
import slider1 from '../public/img/sliderMenu/slider1.jpg';
import slider2 from '../public/img/sliderMenu/slider2.jpg';
import slider3 from '../public/img/sliderMenu/slider3.jpg';
import slider4 from '../public/img/sliderMenu/slider4.jpg';
import slider5 from '../public/img/sliderMenu/slider5.jpg';

const sliderImg = [
  slider1, slider2, slider3, slider4, slider5];

export default function HomePage() {
  return (
      <Layout>
          <SearchBar placeholder="Recetas, comidas e ingredientes ..." />
          <Slider imgs={sliderImg} />
      </Layout>
  );
}
