import React from 'react';
import foods from '../../../public/MealDB-Api/MealDB.json';
import styles from './FoodCards.module.css';

export default function FoodCards() {
  return (
      <section>
          {foods.meals.map((food) => (
              <div className={styles.aBox}>
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

/*
<div className={styles.card}>
    <div className={styles.imgContainer}>
        <img src={food.strMealThumb} alt="Imagen" />
    </div>
    <h3>{food.strMeal}</h3>
</div>
*/
