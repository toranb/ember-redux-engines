import { fork } from 'redux-saga/effects';
import { transition } from './routed';

export default function* root() {
  yield [
    fork(transition)
  ];
}
