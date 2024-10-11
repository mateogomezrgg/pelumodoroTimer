import { useState } from 'react';
import { formatTime } from '../components/helpers/formatTime';

export const useCountdown = (seconds) => {
  console.log('seconds worktime', seconds.workTime);
  console.log('seconds breaKTime  ', seconds.breakTime);
  const formattedValue = formatTime(seconds.workTime * 60);
  console.log('formattedValue: ', formattedValue);

  const [timeLeft, setTimeLeft] = useState(formattedValue);
  const [isRunning, setIsRunning] = useState(false);

  console.log('formattedValue after state: ', formattedValue);
  console.log(timeLeft);

  const handleTimerEnd = (timer) => {
    clearInterval(timer);
    setIsRunning(false);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = (seconds) => {
    setIsRunning(false);
    setTimeLeft(seconds * 60);
  };

  const startTimer = () => {
    setIsRunning(true);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;

        if (prevTime <= 1) {
          handleTimerEnd(timer);
        }
        return newTime;
      });
    }, 1000);
  };

  return {
    startTimer,
    resetTimer,
    pauseTimer,
    timeLeft,
    isRunning,
  };
};
