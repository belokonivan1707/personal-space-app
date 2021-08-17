import { Reducer } from 'react';
import { CHANGE_FILM_RATING, SORT_BY_PROPERTY, CHANGE_FAVORITE_PROPERTY } from './const';
import { RatingPayloadType } from './action';
import { films, FilmsType } from './data';
import { changeFilmRating, sortByProperty, changeFavoriteProperty } from './utils';
import { CinemaState } from './types';

export type ActionsType =
  | { type: 'CHANGE_FILM_RATING'; payload: RatingPayloadType }
  | { type: 'SORT_BY_PROPERTY'; payload: string }
  | { type: 'CHANGE_FAVORITE_PROPERTY'; payload: number };

const INNITTIAL_STATE = {
  cinema: films,
  cinemaToShow: [] as FilmsType[],
};

const cinemaReducer: Reducer<CinemaState, ActionsType> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_FILM_RATING:
      return {
        ...state,
        cinemaToShow: changeFilmRating(state.cinemaToShow, action.payload),
      };

    case SORT_BY_PROPERTY:
      return {
        ...state,
        cinemaToShow: sortByProperty(state.cinema, action.payload),
      };

    case CHANGE_FAVORITE_PROPERTY:
      return {
        ...state,
        cinemaToShow: changeFavoriteProperty(state.cinemaToShow, action.payload),
      };

    default:
      return state;
  }
};

export default cinemaReducer;
