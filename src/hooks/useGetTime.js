import { useEffect, useState } from 'react';

export const useGetTime = () => {
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

  return {
    formatTime,
    startTimer,
    resetTimer,
    pauseTimer,
    timeLeft,
    isRunning,
    isWorkSession,
  };
};
