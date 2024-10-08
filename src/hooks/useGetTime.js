import { useState } from 'react';

export const useGetTime = () => {
  const initialSessionLength = 0;

  const [counter, setCounter] = useState(initialSessionLength);

  const cycles = [
    [25, 5],
    // [50, 10],
  ];

  const changeSessionLength = () => {
    cycles.map((cycle) => setCounter(cycle[0]));
  };

  const resetSessionLength = () => {
    setCounter(initialSessionLength);
  };

  // const timeLeft = () => {
  //   let totalTime = cycles[0][0] * 60;
  //   let minutes = Math.floor(totalTime / 60);
  //   let seconds = totalTime % 60;

  //   if (seconds < 10) {
  //     seconds = '0' + seconds;
  //   }

  //   console.log(`${minutes}:${seconds}`);

  //   if (totalTime > 0) {
  //     totalTime--;
  //   } else {
  //     clearInterval(interval);
  //     console.log('¡Tiempo terminado!');
  //   }
  // };

  // const interval = setInterval(timeLeft, 1000);

  return {
    cycles,
    counter,
    changeSessionLength,
    resetSessionLength,
    // timeLeft,
  };
};
