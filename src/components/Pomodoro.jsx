import { useState } from 'react';

import { Timer } from './Timer';
import { cycles } from './cycles/constants';

import './pomodoro.css';

export const Pomodoro = () => {
  const [selectedCycleId, setSelectedCycleId] = useState(null);
  const [runningCycleId, setRunningCycleId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleTimerSwitch = () => {
    setRunningCycleId(selectedCycleId);
  };

  const handleTimerPause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <>
      <h1>Pomodoro Timer</h1>
      <hr />
      <Timer
        selectedCycleId={selectedCycleId}
        onTimerStart={handleTimerSwitch}
        onTimerPause={handleTimerPause}
      />
      <div className='cyclesContainer'>
        {cycles.map(({ id, workTime, breakTime }) => {
          return (
            <button
              key={id}
              onClick={() => setSelectedCycleId(id)}
              disabled={runningCycleId && isPaused && runningCycleId !== id}
            >{`${workTime} - ${breakTime}`}</button>
          );
        })}
      </div>
    </>
  );
};
