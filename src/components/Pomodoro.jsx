import { useState } from 'react';

import { Cycles } from './Cycles';
import { cycles } from './cycles/constants';
import './pomodoro.css';

export const Pomodoro = () => {
  const [selectedCycleId, setSelectedCycleId] = useState(null);

  return (
    <>
      <h1>Pomodoro Timer</h1>
      <hr />
      <Cycles selectedCycleId={selectedCycleId} />
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
