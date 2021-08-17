import { Reducer } from 'react';
import { CHANGE_FILM_RATING, SORT_BY_PROPERTY, CHANGE_FAVORITE_PROPERTY } from './const';
import { RatingPayloadType } from './action';
import { films } from './data';
import { changeFilmRating, sortByProperty, changeFavoriteProperty } from './utils';
import { CinemaState } from './types';

export type ActionsType =
  | { type: 'CHANGE_FILM_RATING'; payload: RatingPayloadType }
  | { type: 'SORT_BY_PROPERTY'; payload: string }
  | { type: 'CHANGE_FAVORITE_PROPERTY'; payload: number };

const INNITTIAL_STATE = {
  cinema: films,
  cinemaCopy: films,
};

const cinemaReducer: Reducer<CinemaState, ActionsType> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_FILM_RATING:
      return {
        ...state,
        cinema: changeFilmRating(state.cinema, action.payload),
      };

    case SORT_BY_PROPERTY:
      return {
        ...state,
        cinema: sortByProperty(state.cinemaCopy, action.payload),
      };

    case CHANGE_FAVORITE_PROPERTY:
      return {
        ...state,
        cinema: changeFavoriteProperty(state.cinema, action.payload),
      };

    default:
      return state;
  }
};

export default cinemaReducer;
