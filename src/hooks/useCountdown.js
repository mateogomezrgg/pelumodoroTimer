import { useState } from 'react';

export const useCountdown = (seconds) => {
  const [timeLeft, setTimeLeft] = useState(seconds * 60);
  const [isRunning, setIsRunning] = useState(false);

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
