import { useEffect } from 'react';
import { useGetTime } from '../hooks';
import { cycles } from './cycles/constants';

export const Timer = ({ selectedCycleId, onTimerStart, onTimerPause }) => {
  const selectedCycle = cycles.find(({ id }) => id === selectedCycleId);

  const {
    formatTime,
    pauseTimer,
    resetTimer,
    startTimer,
    timeLeft,
    isWorkSession,
    isRunning,
  } = useGetTime(selectedCycle);

  useEffect(() => {
    pauseTimer();
    resetTimer();
  }, [selectedCycle]);

  useEffect(() => {
    if (isRunning) {
      onTimerStart();
      onTimerPause();
    } else if (!isRunning) {
      onTimerPause();
    }
  }, [isRunning]);

  if (!selectedCycle) {
    return <h3>Select a cycle</h3>;
  }

  return (
    <div className='container'>
      <div key={selectedCycle.id} className='sessionLengthContainer'>
        <p className='timeLeft'>{formatTime(timeLeft)}</p>
        <span>
          Session Length: {`${selectedCycle.workTime}:00 `} & Break:
          {` ${selectedCycle.breakTime}:00 `}
        </span>
      </div>

      <h3>{isWorkSession ? 'Work Time!' : 'Break Time!'}</h3>
      <div className='buttonsContainer'>
        <button onClick={startTimer}>START</button>
        <button onClick={pauseTimer}>PAUSE</button>
        <button onClick={resetTimer}>RESET</button>
      </div>
    </div>
  );
};
