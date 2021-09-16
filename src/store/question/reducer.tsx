import { Reducer } from 'react';
import { QUESTIONS_JS } from './data/data';
import { QuestionsInitialType } from './types';

const INNITTIAL_STATE = {
  JavaScript: QUESTIONS_JS,
  CSS: QUESTIONS_JS,
  HTML: QUESTIONS_JS,
};

export interface ActionsType {
  type: string;
  payload?: string;
}

const questionReducer: Reducer<QuestionsInitialType, ActionsType> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default questionReducer;
 