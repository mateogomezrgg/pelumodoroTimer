export const timerStates = (
  setIsRunning,
  setTimeLeft,
  isWorkSession,
  selectedCycle
) => {
  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    // dispatch({
    //   type: 'RESET_TIMER',
    //   isRunning: false,
    //   isWorkSession,
    // });

    setIsRunning(false);
    setTimeLeft(
      isWorkSession ? selectedCycle.workTime * 60 : selectedCycle.breakTime * 60
    );
  };

  const startTimer = () => {
    // dispatch({
    //   type: 'START_TIMER',
    //   isRunning: true,
    // });
    setIsRunning(true);
  };

  return {
    startTimer,
    resetTimer,
    pauseTimer,
  };
};
