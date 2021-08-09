import { Reducer } from 'react';
import {
  SET_RANDOM_SEQUENCE,
  CHANGE_COLOR_IN_SEQUENSE_TO_BLACK,
  CHANGE_COLOR_IN_SEQUENSE_TO_DARKGRAY,
  SET_USER_SEQUENCE,
} from './const';

export interface BlocksGmaeReducer {
  randomSequence: any;
  time: any;
}

// interface Action {
//   type: string;
//   payload: ActionRatingPayloadType;
// }

const INNITTIAL_STATE = {
  randomSequence: [],
  time: 0,
  colorChanged: false,
  userSequence: [],
};

const blocksGmaeReducer: Reducer<any, any> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case SET_RANDOM_SEQUENCE:
      return {
        ...state,
        randomSequence: action.payload.array,
        time: action.payload.timeBeforeRemovingColor,
      };

    case CHANGE_COLOR_IN_SEQUENSE_TO_BLACK:
      return {
        ...state,
        randomSequence: state.randomSequence.map((el: any) => {
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
        randomSequence: state.randomSequence.map((el: any) => {
          return {
            ...el,
            color: 'darkgray',
          };
        }),
      };

    case SET_USER_SEQUENCE:
      return {
        ...state,
        userSequence: [...state.userSequence, action.payload],
      };

    default:
      return state;
  }
};

export default blocksGmaeReducer;
