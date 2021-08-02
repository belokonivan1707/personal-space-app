import { CHANGE_FILM_RATING } from './const';

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
