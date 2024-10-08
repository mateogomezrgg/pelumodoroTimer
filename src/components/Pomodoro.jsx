import { Cycles } from './Cycles';
import './pomodoro.css';

export const Pomodoro = () => {
  return (
    <>
      <h1>Pomodoro Timer</h1>
      <hr />
      <Cycles />
      <div className='cyclesContainer'>
        <button>25 - 5</button>
        <button>45 - 15</button>
        <button>50 - 10</button>
      </div>
    </>
  );
};
