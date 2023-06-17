import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import { useHeros } from 'contexts/HeroContext';
import { useSecrets } from 'contexts/SecretContext';

import styles from './Secret.module.scss';

function Secret() {
  const { name } = useParams();

  const { secrets, toggleInstance } = useSecrets();

  const { instances } = secrets.find((secret) => secret.name === name);

  const { heros } = useHeros();

  const blockedInstance = instances?.find((instance) => {
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

  const filteredInstances = instances?.filter(
    (instance) => !blockedInstance || instance.level < blockedInstance?.level
  );

  const cx = classNames.bind(styles);

  const listClasses = cx(styles.instanceList);

  return (
    <div className={listClasses}>
      <NavLink to="/secrets" className={styles.closeBtn}>
        X
      </NavLink>
      {filteredInstances?.map((instance) => {
        return (
          <Instance
            instance={instance}
            name={name}
            key={instance.name}
            toggleInstance={toggleInstance}
          />
        );
      })}
    </div>
  );
}

function Instance({ instance, name, toggleInstance }) {
  const { isDone } = instance;

  const handleOnCheck = (event) => {
    const { checked } = event.target;

    toggleInstance(name, instance.level, checked);
  };

  return (
    <div className={styles.listItem} key={instance.name}>
      <input type="checkbox" onChange={handleOnCheck} checked={isDone} />
      <span className={styles.name}>{instance.name}</span>
      <span className={styles.reward}>
        {instance.rewardType} * {instance.rewardAmount}
      </span>
      <span className={styles.description}>{instance.description}</span>
    </div>
  );
}

export default Secret;
