import { CHANGE_FAVORITE_PROPERTY_ON_PHOTO } from './const';

// export interface SetRandomSequenceType {
//   array: RandomSequence[];
//   timeBeforeRemovingColor: number;
//   blocksQuantity: number;
// }

// export interface ActionSetUserSequence {
//   payload: number;
// }

export const actionChangeFavoritePropertyOnPhoto = (payload: number) => {
  return {
    type: CHANGE_FAVORITE_PROPERTY_ON_PHOTO,
    payload,
  };
};
