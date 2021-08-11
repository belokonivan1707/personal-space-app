import ComeAndSee from './images/Come-and-See.jpg';
import Farewell from './images/Farewell.jpg';
import RaisingCain from './images/Raising-Cain.png';

export interface FilmsType {
  id: number;
  title: string;
  director: string;
  country: string;
  year: string;
  image: string;
  rating: number;
  faivorite: boolean;
}

export const films = [
  {
    id: 1,
    title: 'Come and See',
    director: 'Elem Klimov',
    country: '',
    year: '1985',
    image: ComeAndSee,
    rating: 5,
    faivorite: true,
  },
  {
    id: 2,
    title: 'Farewell',
    director: 'Larisa Shepitko, Elem Klimov',
    country: 'United States',
    year: '1981',
    image: Farewell,
    rating: 5,
    faivorite: true,
  },
  {
    id: 3,
    title: 'Mission to Mars',
    director: '',
    country: '',
    year: '',
    image: '',
    rating: 5,
    faivorite: false,
  },
  {
    id: 4,
    title: 'Raising Cain',
    director: 'Brian De Palma',
    country: 'United States',
    year: '1992',
    image: RaisingCain,
    rating: 5,
    faivorite: true,
  },
  {
    id: 5,
    title: 'The Untouchable',
    director: '',
    country: '',
    year: '',
    image: '',
    rating: 4,
    faivorite: false,
  },
  {
    id: 6,
    title: 'Rumble Fish',
    director: '',
    country: '',
    year: '',
    image: '',
    rating: 4,
    faivorite: false,
  },
];
