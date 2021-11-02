import { all } from 'redux-saga/effects';
import usersWatcher from './articles/saga';

export default function* rootSaga() {
  yield all([usersWatcher()]);
}
