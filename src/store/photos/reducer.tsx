import { Reducer } from 'react';
import { CHANGE_FAVORITE_PROPERTY_ON_PHOTO } from './const';
// import { } from './action';
import { PHOTOS } from './data/data';
import { changeFavoriteProperty } from './utils';
import { PhotosState } from './types';

export type ActionsType = { type: 'CHANGE_FAVORITE_PROPERTY_ON_PHOTO'; payload: number };

const INNITTIAL_STATE = {
  photos: PHOTOS,
  photosToShow: PHOTOS,
};

const photosReducer: Reducer<PhotosState, ActionsType> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_FAVORITE_PROPERTY_ON_PHOTO:
      return {
        ...state,
        photosToShow: changeFavoriteProperty(state.photosToShow, action.payload),
      };

    default:
      return state;
  }
};

export default photosReducer;
