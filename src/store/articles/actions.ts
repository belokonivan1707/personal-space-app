import { REQUEST_DATA, REQUEST_SUCCESS, REQUEST_ERROR } from './consts';
import { UsersCommentsData } from './types';

export const requestData = () => {
  return {
    type: REQUEST_DATA,
  };
};

export const requestSuccess = (payload: UsersCommentsData[]) => {
  return {
    type: REQUEST_SUCCESS,
    payload,
  };
};

export const requestError = () => {
  return {
    type: REQUEST_ERROR,
  };
};
