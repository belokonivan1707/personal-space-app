import ComeAndSee from './images/Come-and-See.jpg';
import Farewell from './images/Farewell.jpg';
import RaisingCain from './images/Raising-Cain.png';
import ReservoirDogs from './images/Reservoir-Dogs.jpg';
import Untouchables from './images/Untouchables.jpg';
import RumbleFish from './images/Rumble-Fish.jpg';
import MissionToMars from './images/Mission-to-Mars.jpg';
import Europe from './images/europe.jpg';

export interface FilmsType {
  id: number;
  title: string;
  director: string;
  country: string;
  year: string;
  image: string;
  rating: number;
  favorite: boolean;
}

export const films = [
  {
    id: 18,
    title: 'Europe',
    director: 'Lars von Trier',
    country: 'Denmark, Sweden, France, Germany, Switzerland',
    year: '1991',
    image: Europe,
    rating: 5,
    favorite: true,
  },
  {
    id: 7,
    title: 'Reservoir Dogs',
    director: 'Quentin Jerome Tarantino',
    country: 'United States',
    year: '1992',
    image: ReservoirDogs,
    rating: 5,
    favorite: true,
  },
  {
    id: 5,
    title: 'The Untouchable',
    director: 'Brian De Palma',
    country: 'United States',
    year: '1987',
    image: Untouchables,
    rating: 4,
    favorite: false,
  },
  {
    id: 6,
    title: 'Rumble Fish',
    director: 'Francis Ford Coppola',
    country: '	United States',
    year: '1983',
    image: RumbleFish,
    rating: 4,
    favorite: false,
  },
  {
    id: 1,
    title: 'Come and See',
    director: 'Elem Klimov',
    country: 'Soviet Union',
    year: '1985',
    image: ComeAndSee,
    rating: 5,
    favorite: true,
  },
  {
    id: 2,
    title: 'Farewell',
    director: 'Larisa Shepitko, Elem Klimov',
    country: 'Soviet Union',
    year: '1981',
    image: Farewell,
    rating: 5,
    favorite: true,
  },

  {
    id: 4,
    title: 'Raising Cain',
    director: 'Brian De Palma',
    country: 'United States',
    year: '1992',
    image: RaisingCain,
    rating: 5,
    favorite: true,
  },
  {
    id: 3,
    title: 'Mission to Mars',
    director: 'Brian De Palma',
    country: 'United States',
    year: '2000',
    image: MissionToMars,
    rating: 4,
    favorite: false,
  },
  {
    id: 8,
    title: 'Apocalypse Now',
    director: 'Francis Coppola',
    country: 'United States',
    year: ' 1979',
    image: '',
    rating: 5,
    favorite: true,
  },
  {
    id: 9,
    title: 'Full Metal Jacket',
    director: 'Francis Coppola',
    country: 'United States',
    year: '1987',
    image: '',
    rating: 5,
    favorite: true,
  },
  {
    id: 10,
    title: 'Full Metal Jacket',
    director: 'Stanley Kubrick',
    country: 'United Kingdom',
    year: '1987',
    image: '',
    rating: 5,
    favorite: true,
  },
  {
    id: 11,
    title: 'The Shining',
    director: 'Stanley Kubrick',
    country: 'United Kingdom',
    year: '1987',
    image: '',
    rating: 5,
    favorite: true,
  },
  {
    id: 12,
    title: '2001: A Space Odyssey',
    director: 'Stanley Kubrick',
    country: 'United Kingdom',
    year: '1968',
    image: '',
    rating: 5,
    favorite: true,
  },
  {
    id: 13,
    title: 'Eyes Wide Shut',
    director: 'Stanley Kubrick',
    country: 'United Kingdom',
    year: '1999',
    image: '',
    rating: 5,
    favorite: true,
  },
  {
    id: 14,
    title: 'The Rainmaker',
    director: 'Francis Coppola',
    country: 'United State',
    year: '1997',
    image: '',
    rating: 4,
    favorite: false,
  },
  {
    id: 15,
    title: 'Taxi Driver',
    director: 'Martin Scorsese',
    country: 'United State',
    year: '1976',
    image: '',
    rating: 5,
    favorite: true,
  },
  {
    id: 16,
    title: '',
    director: '',
    country: 'United State',
    year: '',
    image: '',
    rating: 4,
    favorite: false,
  },
  {
    id: 17,
    title: '',
    director: '',
    country: 'United State',
    year: '',
    image: '',
    rating: 4,
    favorite: false,
  },
];
