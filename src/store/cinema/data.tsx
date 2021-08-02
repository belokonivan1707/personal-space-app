import ComeAndSee from './images/Come-and-See.jpg';
import Farewell from './images/Farewell.jpg';

export interface filmsType {
  id: number;
  title: string;
  director: string;
  year: string;
  image: string;
  rating: number;
}

export const films = [
  {
    id: 1,
    title: 'Come and See',
    director: 'Elem Klimov',
    year: '1985',
    image: ComeAndSee,
    rating: 5,
  },
  {
    id: 2,
    title: 'Farewell',
    director: 'Larisa Shepitko, Elem Klimov',
    year: '1981',
    image: Farewell,
    rating: 5,
  },
];
