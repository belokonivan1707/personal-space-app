import { PhotosType } from './data/data';

export interface PhotosState {
  photos: PhotosType[];
  photosToShow: PhotosType[];
}
