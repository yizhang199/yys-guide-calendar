import React from 'react';
import { useParams, useSearchParams, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { information, difficulties } from '../Secrets/Secrets.data';
import styles from './Secret.module.scss';

function Secret() {
  const { name } = useParams();

  const [search] = useSearchParams();
  const difficulty = search.get('difficulty');

  const { instances } = information.find((secret) => secret.name === name);

  const difficultyData = difficulties.find((elem) => elem.name === name);

  const maxLevel = difficultyData[difficulty];

  const filteredInstances = instances?.filter(
    (instance) => instance.level <= maxLevel && !instance.isDone
  );

  const cx = classNames.bind(styles);

  const listClasses = cx({ isOpen: !!difficulty }, styles.instanceList);

  return (
    <div className={listClasses}>
      <NavLink to="/secrets" className={styles.closeBtn}>
        X
      </NavLink>
      {filteredInstances?.map((instance) => {
        return (
          <div className={styles.listItem} key={instance.name}>
            <input type="checkbox" />
            <span className={styles.name}>{instance.name}</span>
            <span className={styles.reward}>
              {instance.rewardType} * {instance.rewardAmount}
            </span>
            <span className={styles.description}>{instance.description}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Secret;
