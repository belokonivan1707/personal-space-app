import { PhotosType } from './data/data';

export const changeFavoriteProperty = (photos: PhotosType[], id: number) => {
  const item = photos.find(el => el.id === id);

  if (item) {
    const array = photos.map(el => {
      if (el.id === id) {
        return el.favorite ? { ...el, favorite: false } : { ...el, favorite: true };
      }

      return el;
    });

    return array;
  }

  return photos;
};
