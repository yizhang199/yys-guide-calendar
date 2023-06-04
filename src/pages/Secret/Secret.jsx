import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import store from 'store2';

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
        return <Instance instance={instance} name={name} key={instance.name} />;
      })}
    </div>
  );
}

function Instance({ instance, name }) {
  const [isDone, setDone] = useState(false);

  const handleOnCheck = (event) => {
    const { checked } = event.target;
    const arr = store.get(name) || [];

    if (checked) {
      store.set(name, [...arr, instance.level]);
    } else {
      store.set(
        name,
        arr.filter((elem) => elem !== instance.level)
      );
    }

    setDone(checked);
  };

  useEffect(() => {
    const arr = store.get(name) || [];

    if (arr.includes(instance.level) !== isDone) {
      setDone(!isDone);
    }
  }, [name]);

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
