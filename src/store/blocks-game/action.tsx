import {
  SET_RANDOM_SEQUENCE,
  CHANGE_COLOR_IN_SEQUENSE_TO_BLACK,
  CHANGE_COLOR_IN_SEQUENSE_TO_DARKGRAY,
  SET_USER_SEQUENCE,
} from './const';

// export interface ActionRatingPayloadType {
//   starId: number;
//   id: number;
// }

export const actionSetRandomSequence = (payload: any) => {
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
