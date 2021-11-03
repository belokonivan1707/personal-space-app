import { REQUEST_DATA, REQUEST_SUCCESS, REQUEST_ERROR } from './consts';
import { PostsCommentsData } from './types';

export const requestData = () => {
  return {
    type: REQUEST_DATA,
  };
};

export const requestSuccess = (payload: PostsCommentsData) => {
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
