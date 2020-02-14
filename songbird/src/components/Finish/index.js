import React from 'react';
import sertificate from '../../images/sertificate.pdf';
import styles from './finish.module.css';

const Finish = props => {
  return (
    <div className={styles.wrapper}>
      {props.score < props.countOfSteps * 5 ? (
        <div>
          <h2>Поздравляем вы успешно завершили викторину!</h2>
          <h3>
            Вы набрали {props.score} из {props.countOfSteps * 5} баллов
          </h3>
          <button onClick={props.tryAgain}>Попробовать ещё раз</button>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <h2>Поздравляем вы успешно завершили викторину!</h2>
          <h3>
            Вы набрали максимальное количество баллов и можете скачать
            <br />
            сертификат "Знаток птичек 80 уровня"!
          </h3>
          <a
            href={sertificate}
            target='_blank'
            rel='noopener noreferrer'
            download
          >
            Скачать серифтикат
          </a>
          <button onClick={props.tryAgain}>Попробовать ещё раз</button>
        </div>
      )}
    </div>
  );
};

export default Finish;
