import { useGetTime } from '../hooks';

export const Cycles = () => {
  const cycles = [
    { id: 1, workTime: 25, breakTime: 5 },
    { id: 2, workTime: 45, breakTime: 15 },
    { id: 3, workTime: 50, breakTime: 10 },
  ];
  const {
    formatTime,
    resetTimer,
    pauseTimer,
    startTimer,
    timeLeft,
    isWorkSession,
  } = useGetTime();

  return (
    <div className='container'>
      <div>
        {cycles.map(({ id, workTime, breakTime }) => {
          return (
            <div key={id}>
              <div className='sessionLengthContainer'>
                <p className='timeLeft'>{formatTime(timeLeft)}</p>
                <span>
                  Session Length: {`${workTime}:00 `} & Break:
                  {` ${breakTime}:00 `}
                </span>
              </div>
            </div>
          );
        })}
        <h3>{isWorkSession ? 'Work Time!' : 'Break Time!'}</h3>
      </div>
      <div className='buttonsContainer'>
        <button onClick={startTimer}>START</button>
        <button onClick={pauseTimer}>PAUSE</button>
        <button onClick={resetTimer}>RESET</button>
      </div>
    </div>
  );
};
