const foo = ((state, action) => {
  if(action.type === 'RENAME') {
      return Object.assign({}, state, {name: action.name});
  }
  return state || {name: 'start'};
});

export default {
  foo
}
