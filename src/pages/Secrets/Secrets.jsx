import React, { useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { difficulties, information } from './Secrets.data';
import styles from './Secrets.module.scss';

function Secrets() {
  const [difficultyLevel, setDifficultyLevel] = useState('beginnerLevel');

  const { name } = useParams();

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
      {/* <div>
        <button data-type="beginnerLevel" onClick={handleOnButtonClick}>
          Beginner
        </button>
        <button data-type="intermediateLevel" onClick={handleOnButtonClick}>
          Intermediate
        </button>
        <button data-type="expertLevel" onClick={handleOnButtonClick}>
          Expert
        </button>
      </div> */}
      <div className={styles.grid}>
        {filteredData.map((data) => {
          return (
            <Secret data={data} difficulty={difficultyLevel} key={data.name} />
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

function Secret({ data, difficulty }) {
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
        to={`/secrets/${name}?difficulty=${difficulty}`}
      >
        明细 <span className={styles.arrow}></span>
      </NavLink>
    </div>
  );
}
