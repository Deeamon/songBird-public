import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styles from './audioBlock.module.css';

const AudioBlock = props => {
  return (
    <div className={styles.audioBlock}>
      {props.quizStatus ? (
        <img
          className={styles.image}
          src={props.currentBird.image}
          alt='bird'
        />
      ) : (
        <div className={styles.image}>?</div>
      )}

      <div className={styles.question}>
        <h2>{props.quizStatus ? props.currentBird.name : '*****'}</h2>
        <AudioPlayer
          src={props.currentBird.audio}
          autoPlayAfterSrcChange={false}
          showVolumeControl={false}
          showLoopControl={false}
          showJumpControls={false}
        />
      </div>
    </div>
  );
};

export default AudioBlock;
