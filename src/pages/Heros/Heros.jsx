import React from 'react';
import { useHeros } from 'contexts/HeroContext';
import classNames from 'classnames/bind';
import SlideButton from 'components/SlideButton/SlideButton';

import styles from './Heros.module.scss';

function Heros() {
  const { heros, addHero, removeHero } = useHeros();

  const cx = classNames.bind(styles);

  return (
    <div className={styles.heros}>
      <div className={styles.heroGroup}>
        {heros.map((hero) => {
          const cardClasses = cx({ selected: hero.obtained }, styles.heroCard);
          const nameClasses = cx({ selected: hero.obtained }, styles.name);

          return (
            <div key={hero.name} className={cardClasses} data-hero={hero.id}>
              <img
                src={`heros/${hero.imgUrl}`}
                className={hero.obtained ? styles.selected : ''}
                alt={hero.name}
              />
              <span className={nameClasses}>
                {hero.name}
                <SlideButton
                  checked={hero.obtained}
                  handleToggle={(evt) => {
                    const { checked } = evt.target;
                    if (checked) {
                      addHero(hero.id);
                    } else {
                      removeHero(hero.id);
                    }
                  }}
                />
              </span>
              <span className={styles.source}>
                <b>获取：</b>
                {hero.source}
              </span>
              <span className={styles.soul}>
                <b>御魂：</b>
                {hero.soul}
              </span>
              <span className={styles.speed}>
                <b>速度：</b>
                {hero.speed}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Heros;
