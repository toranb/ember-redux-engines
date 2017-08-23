import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import RoutedService from 'theapp/services/routed';

function* transitionAsync() {
  yield put({type: 'TRANSITION_START'});
  yield call(delay, 2000);
  yield put({type: 'TRANSITION_END'});
  yield call(delay, 2000);
  RoutedService.transitionTo('index');
}

export function* transition() {
  yield takeEvery('TRANSITION', transitionAsync);
}
