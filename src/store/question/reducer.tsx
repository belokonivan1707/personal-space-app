import { Reducer } from 'react';
import {
  SET_SELECTED_CATEGORY_OF_QUESTIONS,
  SET_ANSWER_ON_QUESTION,
  SET_TEST_FINISHED,
  CHECK_THE_RESULT,
  CHOOSE_NEW_TOPIC,
} from './consts';
import { Questions, QUESTIONS_JS } from './data/data';
import { QuestionsInitialType } from './types';
import { countCorrectAnswers, setNewAnswer } from './utils';
import { SetAnwerPayloadType } from './action';

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
    userAnswers: [],
    numbersOfCorrectAnswers: [],
  },
};

export type ActionsType =
  | { type: 'SET_SELECTED_CATEGORY_OF_QUESTIONS'; payload: Questions[] }
  | { type: 'SET_ANSWER_ON_QUESTION'; payload: SetAnwerPayloadType }
  | { type: 'SET_TEST_FINISHED' }
  | { type: 'CHECK_THE_RESULT' }
  | { type: 'CHOOSE_NEW_TOPIC' };

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
        user: {
          ...state.user,
          userAnswers: setNewAnswer(state.user.userAnswers, action.payload),
        },
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
          numbersOfCorrectAnswers: countCorrectAnswers(state.user.selectedCategory, state.user.userAnswers),
        },
      };

    case CHOOSE_NEW_TOPIC:
      return {
        ...state,
        user: {
          ...state.user,
          testBegin: false,
          testFinised: false,
          userAnswers: [],
          numbersOfCorrectAnswers: [],
        },
      };

    default:
      return state;
  }
};

export default questionReducer;
