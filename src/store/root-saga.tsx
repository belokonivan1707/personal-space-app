import { all } from '@redux-saga/core/effects';
import usersWatcher from './articles/saga';
import moneyManagerWhatcher from './money/saga';

export default function* rootSaga() {
  yield all([usersWatcher(), moneyManagerWhatcher()]);
}
