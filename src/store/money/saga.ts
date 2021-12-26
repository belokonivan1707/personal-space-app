import { call, put, takeEvery, delay } from '@redux-saga/core/effects';
import { CATEGORIES } from './data';
import { successExpensesResponse, errorExpensesRequest } from './actions';
import { ActionsType, CategoryTypes } from './types';

const getData = (url: string) => {
  if (url) {
    return CATEGORIES;
  }
  return [];
};

function* getExpensesData() {
  try {
    yield delay(500);
    const expensesData: CategoryTypes[] = yield call(getData, 'fuck');
    yield put(successExpensesResponse(expensesData));
  } catch (e) {
    yield put(errorExpensesRequest());
  }
}

function* postPurchaseExestingCategory(action: ActionsType) {
  yield console.log(action);
  try {
    yield delay(500);
  } catch (e) {
    // console.log(e);
  }
}

export default function* moneyManagerWhatcher() {
  yield takeEvery('GET_EXPENSES_DATA', getExpensesData);
  yield takeEvery('UPDATE_EXISTING_EXPENSES_CATEGORY', postPurchaseExestingCategory);
}
