import React from 'react';
import { useHeros } from 'contexts/HeroContext';

import styles from './Heros.module.scss';

function Heros() {
  const { heros, addHero, removeHero } = useHeros();

  const handleOnHeroChange = (evt) => {
    const { checked } = evt.target;
    const { hero } = evt.target.dataset;

    if (!hero) return;

    if (checked) {
      addHero(Number(hero));
    } else {
      removeHero(Number(hero));
    }
  };

  const handleOnSelectedHeroClick = (evt) => {
    const { hero } = evt.target.dataset;

    if (!hero) return;

    removeHero(Number(hero));
  };

  return (
    <div>
      <div className={styles.selectedHeros}>
        {heros
          .filter((hero) => hero.obtained)
          .map((hero) => (
            <div key={hero.name} className={styles.selectedHero}>
              <img
                data-hero={hero.id}
                onClick={handleOnSelectedHeroClick}
                src={`heros/${hero.imgUrl}`}
                alt={hero.name}
              />
            </div>
          ))}
      </div>
      <div className={styles.heroGroup}>
        {heros
          .filter((hero) => !hero.obtained)
          .map((hero) => (
            <div key={hero.name} className={styles.hero}>
              <input
                type="checkbox"
                checked={hero.obtained}
                data-hero={hero.id}
                onChange={handleOnHeroChange}
              />
              <span>{hero.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Heros;
