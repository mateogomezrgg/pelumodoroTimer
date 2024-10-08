import { useEffect, useState } from 'react';

export const useGetTime = (selectedCycle = 0) => {
  const [timeLeft, setTimeLeft] = useState(selectedCycle.workTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning) {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;

          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            setIsWorkSession(!isWorkSession);
            return isWorkSession
              ? selectedCycle.breakTime * 60
              : selectedCycle.workTime * 60;
          }
          return newTime;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isWorkSession, selectedCycle]);

  useEffect(() => {
    if (selectedCycle) {
      setTimeLeft(
        isWorkSession
          ? selectedCycle.workTime * 60
          : selectedCycle.breakTime * 60
      );
    }
  }, [selectedCycle, isWorkSession]);

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(
      isWorkSession ? selectedCycle.workTime * 60 : selectedCycle.breakTime * 60
    );
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
