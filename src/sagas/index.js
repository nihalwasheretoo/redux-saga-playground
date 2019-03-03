import { fork } from 'redux-saga/effects'
import { testSaga,increment, decrement } from './sagas';

export default function* rootSaga () {
    yield fork(testSaga);
    yield fork(increment);
    yield fork(decrement);
}