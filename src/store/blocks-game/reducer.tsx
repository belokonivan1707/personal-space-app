import { Reducer } from 'react';
import { RandomSequence } from 'pages/blockspage/blockspage';
import {
  SET_RANDOM_SEQUENCE,
  CHANGE_COLOR_IN_SEQUENSE_TO_BLACK,
  CHANGE_COLOR_IN_SEQUENSE_TO_DARKGRAY,
  SET_USER_SEQUENCE,
  CHECK_USER_SEQUENCE,
  RELOAD_GAME,
} from './const';
import { checkUserSequence } from './utils';
import { BlocksGameState } from './types';

const INNITTIAL_STATE = {
  score: 0,
  randomSequence: [],
  time: 0,
  colorChanged: false,
  userSequence: [],
  difficult: 0,
  moveCounter: 0,
  win: null,
  userStep: 1,
};

const blocksGameReducer: Reducer<BlocksGameState, any> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case SET_RANDOM_SEQUENCE:
      return {
        ...state,
        randomSequence: action.payload.array,
        time: action.payload.timeBeforeRemovingColor,
        difficult: action.payload.blocksQuantity,
      };

    case CHANGE_COLOR_IN_SEQUENSE_TO_BLACK:
      return {
        ...state,

        randomSequence: state.randomSequence.map((el: RandomSequence) => {
          return {
            ...el,
            color: 'black',
          };
        }),
        colorChanged: true,
      };

    case CHANGE_COLOR_IN_SEQUENSE_TO_DARKGRAY:
      return {
        ...state,
        randomSequence: state.randomSequence.map((el: RandomSequence) => {
          return {
            ...el,
            color: 'darkgray',
          };
        }),
      };

    case SET_USER_SEQUENCE:
      return {
        ...state,
        userStep: state.userStep + 1,
        randomSequence: state.randomSequence.map((el: RandomSequence) => {
          if (el.id === action.payload) {
            return {
              ...el,
              color: 'pink',
              linear: 0,
            };
          }

          return {
            ...el,
          };
        }),
        userSequence: [...state.userSequence, action.payload],
        moveCounter: state.moveCounter + 1,
      };

    case CHECK_USER_SEQUENCE:
      return {
        ...state,
        win: checkUserSequence(state.userSequence, state.difficult),
      };

    case RELOAD_GAME:
      return {
        ...state,
        score: state.win === true ? state.score + 1 : 0,
        randomSequence: [],
        time: 0,
        colorChanged: false,
        userSequence: [],
        difficult: 0,
        moveCounter: 0,
        win: null,
        userStep: 1,
      };

    default:
      return state;
  }
};

export default blocksGameReducer;
