import { CHANGE_FILM_RATING, SORT_BY_PROPERTY } from './const';

export interface ActionRatingPayloadType {
  starId: number;
  id: number;
}

export const actionChangeFilmRating = (payload: ActionRatingPayloadType) => {
  return {
    type: CHANGE_FILM_RATING,
    payload,
  };
};

export const actionSortByProperty = (payload: string) => {
  return {
    type: SORT_BY_PROPERTY,
    payload,
  };
};

// export const actionLoadFavoriteCinema = (payload: string) => {
//   return {
//     type: LOAD_FAIVORITE_CINEMA,
//     payload,
//   };
// };
