import { useReducer, useState } from 'react';

import { Timer } from './Timer';
import { cycles } from './cycles/constants';

import './pomodoro.css';
import { CustomizeTimer } from './customizeTimer/CustomizeTimer';
import { timerReducer } from './timerReducer';

export const Pomodoro = () => {
  const [selectedCycleId, setSelectedCycleId] = useState(null);
  const [runningCycleId, setRunningCycleId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // const [state, dispatch] = useReducer(timerReducer, {});

  const handleTimerSwitch = () => {
    // dispatch({
    //   type: 'CHANGE_TIMER',
    //   selectedCycleId,
    // });
    setRunningCycleId(selectedCycleId);
  };

  const handleTimerPause = () => {
    // dispatch({
    //   type: 'PAUSE_TIMER',
    //   id: selectedCycleId,
    //   prev: (prev) => !prev,
    //   isPaused,
    // });

    setIsPaused((prev) => !prev);
    // setIsPaused(!isPaused) ASK MAKI WHY THIS DONT WORK
  };

  const handleCustomizeTimer = () => {
    // dispatch({
    //   type: 'CUSTOMIZE_TIMER',
    // });
    console.log('Customize Timer');
  };

  return (
    <div className='container'>
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
      <CustomizeTimer onCustomizeTimer={handleCustomizeTimer} />
    </div>
  );
};
