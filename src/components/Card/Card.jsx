import React from 'react';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';

function Card({ children, className }) {
  const cx = classNames.bind(styles);
  const cardClasses = cx(styles.card, className);

  return <div className={cardClasses}>{children}</div>;
}

export default Card;
