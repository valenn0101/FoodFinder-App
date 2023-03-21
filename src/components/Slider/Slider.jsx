import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.css';

export default function Slider({ imgs }) {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = imgs?.length;
  const [intervalID, setIntervalID] = useState(null);

  useEffect(() => {
    const id = setInterval(siguienteImagen, 10000);
    setIntervalID(id);

    return () => clearInterval(id);
  }, [imagenActual]);

  if (cantidad === 0) {
    return null;
  }

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  return (
      <div className={styles.container}>
          {imgs.map((imagen, index) => (
              <div className={imagenActual === index ? `${styles.slide} ${styles.active}` : styles.slide}>
                  {imagenActual === index && (
                  <img key={index} src={imagen.src} alt="imagen" />
                  )}
              </div>
          ))}
      </div>
  );
}

Slider.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
