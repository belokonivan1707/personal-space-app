import { FilmsType } from './data/data';
import { RatingPayloadType } from './action';

export const changeFavoriteProperty = (array: FilmsType[], payload: number) => {
  const checkItem = array.find(el => el.id === payload);

  if (checkItem) {
    const newArray = array.map((el: FilmsType) => {
      if (el.id === payload) {
        const item = el.favorite === true ? { ...el, favorite: false } : { ...el, favorite: true };
        return { ...item };
      }

      return el;
    });

    return newArray;
  }

  return [...array];
};

export const changeFilmRating = (array: FilmsType[], payload: RatingPayloadType) => {
  const checkItem = array.find((item: FilmsType) => item.id === payload.id);

  if (checkItem) {
    return array.map(el => {
      return el.id === payload.id ? { ...el, rating: payload.starId } : el;
    });
  }

  return [...array];
};

export const sortByProperty = (cinema: FilmsType[], sortingProperty: string) => {
  if (sortingProperty === 'favorite') {
    const sorted = cinema.filter(el => el.favorite === true);
    return sorted;
  }

  if (sortingProperty === 'all') {
    return cinema;
  }

  return cinema;
};
