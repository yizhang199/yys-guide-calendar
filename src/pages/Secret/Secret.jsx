import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { information, difficulties } from '../Secrets/Secrets.data';
import styles from './Secret.module.scss';

function Secret() {
  const { name } = useParams();

  const [search] = useSearchParams();
  const difficulty = search.get('difficulty');

  const { instances } = information.find((secret) => secret.name === name);

  if (!instances) return;

  const difficultyData = difficulties.find((elem) => elem.name === name);

  const maxLevel = difficultyData[difficulty];

  const filteredInstances = instances.filter(
    (instance) => instance.level <= maxLevel && !instance.isDone
  );

  return (
    <div className={styles.instanceList}>
      {filteredInstances.map((instance) => {
        return (
          <div className={styles.listItem} key={instance.name}>
            {instance.name}
          </div>
        );
      })}
    </div>
  );
}

export default Secret;
