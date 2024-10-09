import { useState } from 'react';

import { Timer } from './Timer';
import { cycles } from './cycles/constants';

import './pomodoro.css';
//this comment is just a test.

export const Pomodoro = () => {
  const [selectedCycleId, setSelectedCycleId] = useState(null);

  return (
    <>
      <h1>Pomodoro Timer</h1>
      <hr />
      <Timer selectedCycleId={selectedCycleId} />
      <div className='cyclesContainer'>
        {cycles.map(({ id, workTime, breakTime }) => {
          return (
            <button
              key={id}
              onClick={() => setSelectedCycleId(id)}
            >{`${workTime} - ${breakTime}`}</button>
          );
        })}
      </div>
    </>
  );
};
