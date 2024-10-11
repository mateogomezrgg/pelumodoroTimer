import { useEffect } from 'react';
import { useCountdown } from '../hooks';
import { cycles } from './cycles/constants';
import { formatTime } from './helpers/formatTime';

export const Timer = ({ selectedCycleId, onTimerStart, onTimerPause }) => {
  const isWorkSession = selectedCycleId % 2 === 0;
  // TODO: VERIFY THE LINE ABOVE!

  const selectedCycle = cycles.find(({ id }) => id === selectedCycleId);

  const { pauseTimer, resetTimer, startTimer, timeLeft, isRunning } =
    useCountdown({ ...selectedCycle });
  // I CANT SHOW THE 'TIMELEFT' ON DISPLAY BECAUSE THE LINE ABOVE THIS .

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

  console.log(formatTime(timeLeft));
  console.log(timeLeft);

  return (
    <div className='container'>
      <div key={selectedCycle.id} className='sessionLengthContainer'>
        <p className='timeLeft'>{formatTime(timeLeft)}</p>
        <span>
          Session Length: {`${selectedCycle.workTime}`} & Break:
          {` ${selectedCycle.breakTime}`}
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
