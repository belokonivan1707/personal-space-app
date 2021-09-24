import { Reducer } from 'react';
import { SetAnwerPayloadType } from './action';
import {
  SET_SELECTED_CATEGORY_OF_QUESTIONS,
  SET_ANSWER_ON_QUESTION,
  SET_TEST_FINISHED,
  CHECK_THE_RESULT,
} from './consts';
import { Questions, QUESTIONS_JS } from './data/data';
import { QuestionsInitialType } from './types';
import { checkTheResultOfTest } from './utils';

const INNITTIAL_STATE = {
  questions: {
    JavaScript: QUESTIONS_JS,
    CSS: QUESTIONS_JS,
    HTML: QUESTIONS_JS,
  },
  user: {
    selectedCategory: [],
    testBegin: false,
    testFinised: false,
    usersAnswers: [],
    numberCorrectAnswers: 0,
  },
};

export type ActionsType =
  | { type: 'SET_SELECTED_CATEGORY_OF_QUESTIONS'; payload: Questions[] }
  | { type: 'SET_ANSWER_ON_QUESTION'; payload: any }
  | { type: 'SET_TEST_FINISHED' }
  | { type: 'CHECK_THE_RESULT' };

const questionReducer: Reducer<QuestionsInitialType, ActionsType> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_CATEGORY_OF_QUESTIONS:
      return {
        ...state,
        user: { ...state.user, selectedCategory: [...action.payload], testBegin: true },
      };

    case SET_ANSWER_ON_QUESTION:
      return {
        ...state,
        user: { ...state.user, usersAnswers: [...state.user.usersAnswers, action.payload] },
      };

    case SET_TEST_FINISHED:
      return {
        ...state,
        user: { ...state.user, testFinised: true },
      };

    case CHECK_THE_RESULT:
      return {
        ...state,
        user: {
          ...state.user,
          numberCorrectAnswers: checkTheResultOfTest(state.user.selectedCategory, state.user.usersAnswers),
        },
      };

    default:
      return state;
  }
};

export default questionReducer;
