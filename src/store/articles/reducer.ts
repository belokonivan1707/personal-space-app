import { Reducer } from 'react';
import { REQUEST_SUCCESS, REQUEST_DATA, REQUEST_ERROR } from './consts';
import { articlesData, ARTICLES_DATA } from './data/data';
import { ReducerArticlesState, UsersCommentsData } from './types';

export type ActionsType =
  | { type: 'REQUEST_SUCCESS'; payload: UsersCommentsData[] }
  | { type: 'REQUEST_DATA' }
  | { type: 'REQUEST_ERROR' };

const INNITTIAL_STATE = {
  articles: articlesData,
  articlesEN: ARTICLES_DATA,
  loading: false,
  error: false,
  usersData: {
    comments: [],
  },
};

const articlesReducer: Reducer<ReducerArticlesState, ActionsType> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        loading: true,
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        usersData: { ...state.usersData, comments: action.payload },
      };

    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default articlesReducer;
