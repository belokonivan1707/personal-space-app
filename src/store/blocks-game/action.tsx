import { RandomSequence } from 'pages/blockspage/blockspage';
import {
  SET_RANDOM_SEQUENCE,
  CHANGE_COLOR_IN_SEQUENSE_TO_BLACK,
  CHANGE_COLOR_IN_SEQUENSE_TO_DARKGRAY,
  SET_USER_SEQUENCE,
  CHECK_USER_SEQUENCE,
  RELOAD_GAME,
} from './const';

export interface SetRandomSequenceType {
  array: RandomSequence[];
  timeBeforeRemovingColor: number;
  blocksQuantity: number;
}

export interface ActionSetUserSequence {
  payload: number;
}

export const actionSetRandomSequence = (payload: SetRandomSequenceType) => {
  return {
    type: SET_RANDOM_SEQUENCE,
    payload,
  };
};

export const actionChangeColorInSequenseToBlack = () => {
  return {
    type: CHANGE_COLOR_IN_SEQUENSE_TO_BLACK,
  };
};

export const actionChangeColorInSequenseToDarkgray = () => {
  return {
    type: CHANGE_COLOR_IN_SEQUENSE_TO_DARKGRAY,
  };
};

export const actionSetUserSequence = (payload: number) => {
  return {
    type: SET_USER_SEQUENCE,
    payload,
  };
};

export const actionCheckUserSequence = () => {
  return {
    type: CHECK_USER_SEQUENCE,
  };
};

export const actionReloadGame = () => {
  return {
    type: RELOAD_GAME,
  };
};
