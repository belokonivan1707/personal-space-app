import {
  SET_SELECTED_CATEGORY_OF_QUESTIONS,
  SET_ANSWER_ON_QUESTION,
  SET_TEST_FINISHED,
  CHECK_THE_RESULT,
  CHOOSE_NEW_TOPIC,
} from './consts';
import { Questions } from './data/data';

export const setSelectedCategoryOfQuestions = (payload: Questions[]) => {
  return {
    type: SET_SELECTED_CATEGORY_OF_QUESTIONS,
    payload,
  };
};

export interface SetAnwerPayloadType {
  answerID: number;
  questionID: number;
}

export const setAnswerOnQuestion = (payload: SetAnwerPayloadType) => {
  return {
    type: SET_ANSWER_ON_QUESTION,
    payload,
  };
};

export const setTestFinished = () => {
  return {
    type: SET_TEST_FINISHED,
  };
};

export const checkTheResult = () => {
  return {
    type: CHECK_THE_RESULT,
  };
};
export const chooseNewTopic = () => {
  return {
    type: CHOOSE_NEW_TOPIC,
  };
};
