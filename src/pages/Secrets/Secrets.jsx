import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useHeros } from 'contexts/HeroContext';
import { useSecrets } from 'contexts/SecretContext';

import styles from './Secrets.module.scss';

function Secrets() {
  const { name } = useParams();

  const { heros } = useHeros();
  const { secrets } = useSecrets();

  const filteredData = secrets
    .map((data) => {
      const blockedInstance = data.instances.find((instance) => {
        if (!instance.requirements) return false;

        return (
          !instance.isDone &&
          !instance.requirements.some((heroSet) =>
            heroSet.every(
              (hero) =>
                heros
                  .filter((h) => h.obtained)
                  .findIndex((h) => h.id === hero.id) >= 0
            )
          )
        );
      });

      return {
        ...data,
        instances: data.instances.filter(
          (instance) =>
            !blockedInstance || instance.level < blockedInstance?.level
        ),
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

  return (
    <div className={styles.page}>
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
