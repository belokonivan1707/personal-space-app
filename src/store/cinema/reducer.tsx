import { Reducer } from 'react';
import { CHANGE_FILM_RATING } from './const';
import { ActionRatingPayloadType } from './action';
import { films, filmsType } from './data';
import { changeFilmRating } from '../../utils/change-film-rating';

export interface CinemaState {
  cinema: filmsType[];
}

interface Action {
  type: string;
  payload: ActionRatingPayloadType;
}

const INNITTIAL_STATE = {
  cinema: films,
};

const cinemaReducer: Reducer<CinemaState, Action> = (state = INNITTIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_FILM_RATING:
      return {
        ...state,
        cinema: changeFilmRating(state.cinema, action.payload),
      };

    default:
      return state;
  }
};

export default cinemaReducer;
