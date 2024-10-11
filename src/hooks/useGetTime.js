import { useState } from 'react';
import { getTime } from '../components/helpers/getTime';
import { timerStates } from '../components/helpers/timerStates';
import { formatTime } from '../components/helpers/formatTime';

export const useGetTime = (selectedCycle = 0) => {
  const [timeLeft, setTimeLeft] = useState(selectedCycle.workTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  getTime(
    isRunning,
    setTimeLeft,
    isWorkSession,
    setIsRunning,
    setIsWorkSession,
    selectedCycle
  );

  const { pauseTimer, resetTimer, startTimer } = timerStates(
    setIsRunning,
    setTimeLeft,
    isWorkSession,
    selectedCycle
  );

  formatTime(timeLeft);

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
