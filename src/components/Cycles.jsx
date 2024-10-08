import { useGetTime } from '../hooks';
import { cycles } from './cycles/constants';

export const Cycles = ({ selectedCycleId }) => {
  const selectedCycle = cycles.find(({ id }) => id === selectedCycleId);
  const {
    formatTime,
    resetTimer,
    pauseTimer,
    startTimer,
    timeLeft,
    isWorkSession,
  } = useGetTime(selectedCycle);

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
