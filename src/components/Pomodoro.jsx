import { useEffect, useState } from 'react';

import './pomodoro.css';

const cycles = [
  { id: 1, workTime: 25, breakTime: 5 },
  { id: 1, workTime: 45, breakTime: 15 },
  { id: 2, workTime: 50, breakTime: 10 },
];

export const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning) {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            setIsWorkSession(!isWorkSession);
            return isWorkSession ? 5 * 60 : 25 * 60;
          }
          return prevTime - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isWorkSession]);

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(isWorkSession ? 25 * 60 : 5 * 60);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
      <h1>Pomodoro Timer</h1>
      <hr />
      <div className='container'>
        <div>
          {cycles.map(({ id, workTime, breakTime }) => {
            return (
              <div key={id}>
                <div className='sessionLengthContainer'>
                  <p className='timeLeft'>{formatTime(timeLeft)}</p>
                  <span>
                    Session Length: {`${workTime}:00 `} & Break:
                    {` ${breakTime}:00 `}
                  </span>
                </div>
              </div>
            );
          })}
          <h3>{isWorkSession ? 'Work Time!' : 'Break Time!'}</h3>
        </div>
        <div className='buttonsContainer'>
          <button onClick={startTimer}>START</button>
          <button onClick={pauseTimer}>PAUSE</button>
          <button onClick={resetTimer}>RESET</button>
        </div>
      </div>
    </>
  );
};
