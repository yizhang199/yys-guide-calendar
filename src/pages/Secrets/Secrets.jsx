import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useHeros } from 'contexts/HeroContext';
import { useSecrets } from 'contexts/SecretContext';
import { RewardFilters } from 'data/Secrets';

import styles from './Secrets.module.scss';

function Secrets() {
  const { name } = useParams();

  const { heros } = useHeros();
  const { secrets, selectRewardTypes, selectedRewardTypes } = useSecrets();

  const filteredData = secrets.filter(
    (data) => data?.instances.filter((i) => i.enable && !i.isDone).length > 0
  );

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
      <div className={styles.filterWrapper}>
        {RewardFilters.map((rewardFilter) => {
          const checked =
            rewardFilter.value.length === selectedRewardTypes.length &&
            selectedRewardTypes.every((selectRewardType) =>
              rewardFilter.value.includes(selectRewardType)
            );

          const handleInputChecked = (evt) => {
            if (evt.target.checked) {
              selectRewardTypes(rewardFilter.value);
            } else {
              selectRewardTypes([]);
            }
          };
          const filterButtonClasses = cx(
            { active: checked },
            styles.checkButton
          );

          return (
            <label
              key={`filter-${rewardFilter.id}`}
              className={filterButtonClasses}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={handleInputChecked}
              />
              <span>{rewardFilter.name}</span>
            </label>
          );
        })}
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
      <span className={styles.info}>
        可攻略层数: {instances.filter((i) => !i.isDone && i.enable).length}
      </span>
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
