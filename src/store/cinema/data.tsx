import ComeAndSee from './images/Come-and-See.jpg';
import Farewell from './images/Farewell.jpg';
import RaisingCain from './images/Raising-Cain.png';
import ReservoirDogs from './images/Reservoir-Dogs.jpg';
import Untouchables from './images/Untouchables.jpg';
import RumbleFish from './images/Rumble-Fish.jpg';
import MissionToMars from './images/Mission-to-Mars.jpg';

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
];
