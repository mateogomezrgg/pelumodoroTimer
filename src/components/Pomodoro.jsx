import { useState } from 'react';

import { Timer } from './Timer';
import { cycles as defaultCycles } from './cycles/constants';

import './pomodoro.css';
import { CustomizeTimer } from './customizeTimer/CustomizeTimer';

export const Pomodoro = () => {
  const [selectedCycleId, setSelectedCycleId] = useState(null);
  const [runningCycleId, setRunningCycleId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [cycles, setCycles] = useState(defaultCycles);
  const [showModal, setShowModal] = useState(false);

  const handleTimerSwitch = () => {
    setRunningCycleId(selectedCycleId);
  };

  const handleTimerPause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleCycleSelect = (id) => {
    setSelectedCycleId(id);
    setIsPaused(true);
    const isCustomCycle = cycles.length === id;

    if (isCustomCycle) {
      setShowModal(true);
    }
  };

  const handleCustomizeTimer = () => {
    setShowModal(false);

    setCycles((prevCycles) => {
      return [
        ...prevCycles.slice(0, prevCycles.length - 1),
        {
          id: prevCycles.length,
          workTime: 0,
          breakTime: 0,
        },
      ];
    });
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
              onClick={() => handleCycleSelect(id)}
              disabled={runningCycleId && isPaused && runningCycleId !== id}
            >
              {workTime ? `${workTime} - ${breakTime}` : 'CUSTOM'}
            </button>
          );
        })}
      </div>

      {showModal && (
        <CustomizeTimer
          onCustomizeTimer={handleCustomizeTimer}
          // onCloseModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};
