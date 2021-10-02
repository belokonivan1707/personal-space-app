import { Reducer } from 'react';
import { TEST } from './consts';
import { articlesData } from './data/data';
import { ReducerArticlesState } from './types';

export type ActionsType = { type: 'TEST'; payload: string };

const INNITTIAL_STATE = {
  articles: articlesData,
};

const articlesReducer: Reducer<ReducerArticlesState, ActionsType> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default articlesReducer;
