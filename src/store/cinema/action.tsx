import { CHANGE_FILM_RATING, SORT_BY_PROPERTY, CHANGE_FAVORITE_PROPERTY } from './const';

export interface RatingPayloadType {
  starId: number;
  id: number;
}

export const actionChangeFilmRating = (payload: RatingPayloadType) => {
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

export const actionChangeFavoriteProperty = (payload: number) => {
  return {
    type: CHANGE_FAVORITE_PROPERTY,
    payload,
  };
};
