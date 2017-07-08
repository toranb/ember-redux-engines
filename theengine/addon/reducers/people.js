const initialState = {
  data: 'people'
};

export default ((state, action) => {
  switch(action.type) {
    case 'PEOPLE': {
      return Object.assign({}, state, {data: action.data});
    }
    default: {
      return state || initialState;
    }
  }
});
