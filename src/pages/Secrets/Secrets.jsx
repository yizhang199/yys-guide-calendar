import React, { useState } from 'react';
import { difficulties, information } from './Secrets.data';
import styles from './Secrets.module.scss';

function Secrets() {
  const [difficultyLevel, setDifficultyLevel] = useState('beginnerLevel');

  const filteredData = information
    .map((data) => {
      return {
        ...data,
        instances: data.instances.filter((instance) => {
          const difficulty = difficulties.find(
            (elem) => elem.name === data.name
          );
          if (!difficulty) return false;
          return instance.level <= difficulty[difficultyLevel];
        }),
      };
    })
    .filter((data) => data?.instances?.length > 0);

  const handleOnButtonClick = (event) => {
    event.preventDefault();

    const { dataset } = event.target;
    if (!dataset?.type) return;

    setDifficultyLevel(dataset.type);
  };

  return (
    <div>
      <div>
        <button data-type="beginnerLevel" onClick={handleOnButtonClick}>
          Beginner
        </button>
        <button data-type="intermediateLevel" onClick={handleOnButtonClick}>
          Intermediate
        </button>
        <button data-type="expertLevel" onClick={handleOnButtonClick}>
          Expert
        </button>
      </div>
      <div className={styles.list}>
        {filteredData.map((data) => {
          return <Secret data={data} key={data.name} />;
        })}
      </div>
    </div>
  );
}

export default Secrets;

function Secret({ data }) {
  const { name, instances, imageName } = data;

  return (
    <div>
      <div className={styles.secretCard}>
        <div className={styles.name}>{name}</div>
        {imageName && (
          <img className={styles.avatar} src={`avatar/${imageName}`} alt="" />
        )}
      </div>
      <div className={styles.list}>
        {instances.map((instance) => {
          return <div key={instance.name}>{instance.name}</div>;
        })}
      </div>
    </div>
  );
}
