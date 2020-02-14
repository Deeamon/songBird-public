import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styles from './info.module.css';

const Info = ({ infoBird }) => {
  return (
    <div>
      {infoBird ? (
        <div className={styles.wrapper}>
          <img className={styles.image} src={infoBird.image} alt='bird' />
          <div className={styles.title}>
            <h3>{infoBird.name}</h3>
            <h4>{infoBird.species}</h4>
            <AudioPlayer
              src={infoBird.audio}
              autoPlayAfterSrcChange={false}
              showVolumeControl={false}
              showLoopControl={false}
              showJumpControls={false}
            />
          </div>
          <p>{infoBird.description}</p>
        </div>
      ) : (
        <p className={styles.init}>
          Послушайте плеер. Выберите птицу из списка
        </p>
      )}
    </div>
  );
};

export default Info;
