import { takeEvery } from 'redux-saga/effects'

function logToConsole(){
  console.log("LOGGING TO THE CONSOLE : HELLO REDUX SAGA!!!");
}

function incrementCount(){
  console.log("INCREMENT");
}

function decrementCount(){
  console.log("DECREMENT");
}

export function* testSaga(){
  yield takeEvery('TEST_SAGA', logToConsole);
}

export function* increment(){
  yield takeEvery('INCREMENT', incrementCount);
}

export function* decrement(){
  yield takeEvery('DECREMENT', decrementCount);
}