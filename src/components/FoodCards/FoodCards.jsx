import React from 'react';
import foods from '../../../public/MealDB-Api/MealDB.json';
import styles from './FoodCards.module.css';

export default function FoodCards() {
  return (
      <section>
          {foods.meals.map((food) => (
              <div key={food.idMeal} className={styles.aBox} data-testid="food-card">
                  <div className={styles.imgContainer}>
                      <div className={styles.imgInner}>
                          <div className={styles.innerSkew}>
                              <img src={food.strMealThumb} alt="Comida Imagen" />
                          </div>
                      </div>
                  </div>
                  <div className={styles.textContainer}>
                      <h3>{food.strMeal}</h3>
                      <div>
                          This a demo experiment to skew image container. It looks good.
                      </div>
                  </div>
              </div>
          ))}
      </section>
  );
}
