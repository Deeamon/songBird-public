import React from 'react';
import styles from './header.module.css';

const Header = props => {
  return (
    <header>
      <div className={styles.mainInfo}>
        <h2>
          Song<span>Bird</span>
        </h2>
        <p className={styles.score}>
          {' '}
          Score: <b>{props.score}</b>
        </p>
      </div>
      {!props.isFinish && (
        <ul className={styles.list}>
          {props.birdsData.map((category, index) => {
            return (
              <li
                className={`${styles.item} ${
                  index <= props.currentStep ? styles.itemActive : ''
                }`}
                key={category.id}
              >
                <span>{category.name}</span>
                <i className={category.icon} />
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default Header;
