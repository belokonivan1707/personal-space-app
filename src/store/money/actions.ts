import {
  GET_EXPENSES_DATA,
  SUCCESS_EXPENSES_RESPONSE,
  ERROR_EXPENSES_REQUEST,
  UPDATE_EXISTING_EXPENSES_CATEGORY,
} from './consts';
import { CategoryTypes, UpdateExpensesPayloadType } from './types';

export const getExpensesData = () => {
  return {
    type: GET_EXPENSES_DATA,
  };
};

export const successExpensesResponse = (payload: [] | CategoryTypes[]) => {
  return {
    type: SUCCESS_EXPENSES_RESPONSE,
    payload,
  };
};

export const errorExpensesRequest = () => {
  return {
    type: ERROR_EXPENSES_REQUEST,
  };
};

export const updateExistingExpensesCategory = (payload: UpdateExpensesPayloadType) => {
  return {
    type: UPDATE_EXISTING_EXPENSES_CATEGORY,
    payload,
  };
};
