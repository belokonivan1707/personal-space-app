import { FilmsType } from './data';
import { ActionRatingPayloadType } from './action';

export const changeFilmRating = (array: FilmsType[], payload: ActionRatingPayloadType) => {
  const checkItem = array.find((item: FilmsType) => item.id === payload.id);

  if (checkItem) {
    return array.map(el => {
      return el.id === payload.id ? { ...el, rating: payload.starId } : el;
    });
  }

  return [...array];
};

export const sortByProperty = (cinema: FilmsType[], sortingProperty: string) => {
  if (sortingProperty === 'faivorite') {
    const sorted = cinema.filter(el => el.faivorite === true);
    return sorted;
  }

  if (sortingProperty === 'all') {
    return cinema;
  }

  return cinema;
};
