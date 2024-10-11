export const timerReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case 'START_TIMER': {
      return [...initialState, action.paylaod];
    }

    case 'PAUSE_TIMER': {
      return [...initialState, action.paylaod];
    }

    case 'CHANGE_TIMER': {
      return [...initialState, action.paylaod];
    }

    case 'RESET_TIMER': {
      return [...initialState, action.paylaod];
    }

    case 'CUSTOMIZE_TIMER': {
      return [...initialState, action.paylaod];
    }

    default:
      return initialState;
  }
};
