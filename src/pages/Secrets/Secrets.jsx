import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
    <div className={styles.page}>
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
      <div className={styles.grid}>
        {filteredData.map((data) => {
          return (
            <Secret data={data} difficulty={difficultyLevel} key={data.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Secrets;

function Secret({ data, difficulty }) {
  const { name, instances, imageName } = data;

  return (
    <div className={styles.secretCard}>
      <div className={styles.name}>{name}</div>
      <img className={styles.avatar} src={`avatar/${imageName}`} alt="" />
      <span className={styles.info}>可攻略层数: {instances.length}</span>
      <NavLink
        className={styles.navLink}
        to={`/secret/${name}?difficulty=${difficulty}`}
      >
        明细 <span className={styles.arrow}></span>
      </NavLink>
    </div>
  );
}
