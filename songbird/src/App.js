import React, { useState } from 'react';
import Header from './components/Header';
import AudioBlock from './components/AudioBlock';
import QuizBlock from './components/QuizBlock';
import Info from './components/Info';
import styles from './app.module.css';
import birdsData from './utils/birdsData';
import Finish from './components/Finish';

const App = () => {
  const [score, setScore] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizStatus, setQuizStatus] = useState(false);
  const [infoBird, setInfoBird] = useState();
  const [isFinish, setIsFinish] = useState(false);

  const randomBird = birds => birds[Math.floor(Math.random() * birds.length)];
  const [currentBird, setCurrentBird] = useState(
    randomBird(birdsData[currentStep].birds)
  );

  const goNextLevel = () => {
    if (currentStep + 1 >= birdsData.length) {
      setIsFinish(true);
    } else {
      setInfoBird();
      setCurrentBird(randomBird(birdsData[currentStep + 1].birds));
      setCurrentStep(currentStep + 1);
      setQuizStatus(false);
    }
  };
  const tryAgain = () => {
    setScore(0);
    setInfoBird();
    setQuizStatus(false);
    setCurrentStep(0);
    setIsFinish(false);
    setCurrentBird(randomBird(birdsData[0].birds));
  };
  return (
    <div className={styles.wrapper}>
      <Header
        score={score}
        birdsData={birdsData}
        currentStep={currentStep}
        isFinish={isFinish}
      />

      {isFinish ? (
        <Finish
          score={score}
          countOfSteps={birdsData.length}
          tryAgain={tryAgain}
        />
      ) : (
        <>
          <div className={styles.quiz}>
            <AudioBlock currentBird={currentBird} quizStatus={quizStatus} />
            <QuizBlock
              birdsDataItem={birdsData[currentStep]}
              currentBird={currentBird}
              goNextLevel={goNextLevel}
              quizStatus={quizStatus}
              setQuizStatus={setQuizStatus}
              score={score}
              setScore={setScore}
              setInfoBird={setInfoBird}
            />
          </div>
          <button
            className={styles.button}
            onClick={goNextLevel}
            disabled={!quizStatus}
          >
            Next Level
          </button>
          <Info infoBird={infoBird} />
        </>
      )}
    </div>
  );
};

export default App;
