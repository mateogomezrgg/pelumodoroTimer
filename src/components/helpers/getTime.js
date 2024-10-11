/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

export const getTime = (
  isRunning,
  setTimeLeft,
  isWorkSession,
  setIsRunning,
  setIsWorkSession,
  selectedCycle
) => {
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
};
