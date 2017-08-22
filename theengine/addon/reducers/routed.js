const initialState = {
  status: 'n/a'
};

export default ((state, action) => {
  switch(action.type) {
    case 'TRANSITION_START': {
      return Object.assign({}, state, {status: 'started'});
    }
    case 'TRANSITION_END': {
      return Object.assign({}, state, {status: 'finished'});
    }
    default: {
      return state || initialState;
    }
  }
});
