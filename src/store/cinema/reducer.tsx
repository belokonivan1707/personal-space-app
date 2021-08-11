import { Reducer } from 'react';
import { CHANGE_FILM_RATING, SORT_BY_PROPERTY } from './const';
import { ActionRatingPayloadType } from './action';
import { films, FilmsType } from './data';
import { changeFilmRating, sortByProperty } from './utils';
import { CinemaState } from './types';

export interface Actions {
  type: string;
  payload: ActionRatingPayloadType;
}

const INNITTIAL_STATE = {
  cinema: films,
  cinemaToShow: [] as FilmsType[],
};

const cinemaReducer: Reducer<CinemaState, any> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_FILM_RATING:
      return {
        ...state,
        cinema: changeFilmRating(state.cinema, action.payload),
      };

    case SORT_BY_PROPERTY:
      return {
        ...state,
        cinemaToShow: sortByProperty(state.cinema, action.payload),
      };

    // case LOAD_FAIVORITE_CINEMA:
    //   return {
    //     ...state,
    //     cinemaToShow: sortByProperty(state.cinema, action.payload),
    //   };

    default:
      return state;
  }
};

export default cinemaReducer;
