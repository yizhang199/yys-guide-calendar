import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { information } from 'data/Secrets.js';
import store from 'store2';
import { useHeros } from './useHeros.js';

import styles from './Secrets.module.scss';

function Secrets() {
  const { name } = useParams();

  const { heros, addHero, removeHero } = useHeros();

  const filteredData = information
    .map((data) => {
      return {
        ...data,
        instances: data.instances
          .filter((instance) => {
            const arr = store.get(data.name) || [];

            return !arr.includes(instance.level);
          })
          .filter((instance) => {
            if (!instance.requirements) return false;

            return instance.requirements.some((heroSet) =>
              heroSet.every(
                (hero) =>
                  heros
                    .filter((h) => h.obtained)
                    .findIndex((h) => h.id === hero.id) >= 0
              )
            );
          }),
      };
    })
    .filter((data) => data?.instances?.length > 0);

  const cx = classNames.bind(styles);
  const transitionContainerClasses = cx(
    {
      isOpen: !!name,
      isClose: !name,
    },
    styles.transitionContainer
  );

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
    <div className={styles.page}>
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
      <div className={styles.grid}>
        {filteredData.map((data) => {
          return (
            <Secret
              data={data}
              obtainedHeros={heros.filter((hero) => hero.obtained)}
              key={data.name}
            />
          );
        })}
      </div>
      <div className={transitionContainerClasses}>
        <Outlet />
      </div>
    </div>
  );
}

export default Secrets;

function Secret({ data, obtainedHeros }) {
  const { name, instances, imageName, imageAlt } = data;

  return (
    <div className={styles.secretCard}>
      <div className={styles.name}>{name}</div>
      <img
        className={styles.avatar}
        src={`avatar/${imageName}`}
        alt=""
        data-alt={imageAlt}
      />
      <span className={styles.info}>可攻略层数: {instances.length}</span>
      <NavLink
        className={styles.navLink}
        to={`/secrets/${name}?obtained=${obtainedHeros
          .map((hero) => hero.id)
          .join(',')}`}
      >
        明细 <span className={styles.arrow}></span>
      </NavLink>
    </div>
  );
}
