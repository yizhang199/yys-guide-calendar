import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import { useSecrets } from 'contexts/SecretContext';

import styles from './Secret.module.scss';
import SlideButton from 'components/SlideButton/SlideButton';

function Secret() {
  const { name } = useParams();

  const { secrets, toggleInstance } = useSecrets();

  const [showCompleted, setShowCompleted] = useState(false);
  const [showDisabled, setShowDisabled] = useState(false);

  const { instances } = secrets.find((secret) => secret.name === name);

  const cx = classNames.bind(styles);

  const listClasses = cx(styles.instanceList);

  const filteredInstance = instances.filter((instance) => {
    return (
      (showCompleted || (!showCompleted && !instance.isDone)) &&
      (showDisabled || (instance.enable && !showDisabled))
    );
  });

  const handleShowCompletedChange = (evt) => {
    setShowCompleted(evt.target.checked);
  };

  const handleShowDisabledChange = (evt) => {
    setShowDisabled(evt.target.checked);
  };

  return (
    <div className={listClasses}>
      <div className={styles.header}>
        <SlideButton
          checked={showCompleted}
          handleToggle={handleShowCompletedChange}
          label="显示已完成"
        />
        <SlideButton
          checked={showDisabled}
          handleToggle={handleShowDisabledChange}
          label="显示全部未完成"
        />
        <NavLink to="/secrets" className={styles.closeBtn}>
          X
        </NavLink>
      </div>
      {filteredInstance?.map((instance) => {
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
    <div
      className={styles.listItem}
      key={instance.name}
      style={{ opacity: instance.enable ? 1 : 0.3 }}
    >
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
