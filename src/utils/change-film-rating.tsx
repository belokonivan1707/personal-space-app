import { filmsType } from '../store/cinema/data';
import { ActionRatingPayloadType } from '../store/cinema/action';

export const changeFilmRating = (array: filmsType[], payload: ActionRatingPayloadType) => {
  const checkItem = array.find((item: filmsType) => item.id === payload.id);

  if (checkItem) {
    return array.map(el => {
      return el.id === payload.id ? { ...el, rating: payload.starId } : el;
    });
  }

  return [...array];
};
