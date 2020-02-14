import React, { useState, useEffect } from 'react';
import styles from './quizBlock.module.css';
import wrong from '../../sounds/wrong.mp3';
import success from '../../sounds/success.wav';

const QuizBlock = props => {
  useEffect(() => {
    setClikedBirds([]);
    console.log('Правильный ответ: ', props.currentBird.id % 10);
  }, [props.currentBird.id]);

  const playSound = src => {
    var audio = new Audio();
    audio.src = src;
    audio.autoplay = true;
  };

  const [clikedBirds, setClikedBirds] = useState([]);
  const clickItem = item => {
    props.setInfoBird(item);
    if (clikedBirds.includes(item.id) || props.quizStatus) return;
    if (props.currentBird.id === item.id) {
      playSound(success);
      props.setQuizStatus(true);
      props.setScore(props.score + (5 - clikedBirds.length));
    } else {
      playSound(wrong);
      setClikedBirds([...clikedBirds, item.id]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {props.birdsDataItem &&
          props.birdsDataItem.birds.map(item => (
            <li
              className={`${styles.item} ${
                clikedBirds.includes(item.id) ? styles.itemWrong : ''
              } ${
                item.id === props.currentBird.id && props.quizStatus
                  ? styles.itemSuccess
                  : ''
              }`}
              key={item.id}
              onClick={() => clickItem(item)}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default QuizBlock;
