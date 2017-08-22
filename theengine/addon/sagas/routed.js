import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

function* transitionAsync() {
  yield put({type: 'TRANSITION_START'});
  yield call(delay, 2000);
  yield put({type: 'TRANSITION_END'});
  // Ember.getOwner(this).lookup('router:main').transitionTo('dashboard');
}

export function* transition() {
  yield takeEvery('TRANSITION', transitionAsync);
}
