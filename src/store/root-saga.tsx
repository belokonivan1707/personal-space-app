import { all } from '@redux-saga/core/effects';
import usersWatcher from './articles/saga';

export default function* rootSaga() {
  yield all([usersWatcher()]);
}
