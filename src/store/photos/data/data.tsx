import IMG_1000 from './images/District.jpg';
import IMG_1001 from './images/Door.jpg';
import IMG_1002 from './images/Rain.jpg';
import IMG_1004 from './images/Red-girls.jpg';
import IMG_1005 from './images/Metro.jpg';
import IMG_1006 from './images/transport.jpg';

import IMG_0000 from './mobile-images/District.jpg';
import IMG_0001 from './mobile-images/Door.jpg';
import IMG_0002 from './mobile-images/Rain.jpg';
import IMG_0003 from './mobile-images/Red-girl.jpg';
import IMG_0004 from './mobile-images/Red-girls.jpg';
import IMG_0005 from './mobile-images/Metro.jpg';
import IMG_0006 from './mobile-images/transport.jpg';

export interface PhotosType {
  id: number;
  title: string;
  image: string;
  mobileImg: string;
  description: string;
  favorite: boolean;
}

export const PHOTOS = [
  {
    id: 1,
    title: 'friend',
    image: IMG_1002,
    mobileImg: IMG_0002,
    description: '',
    favorite: false,
  },
  {
    id: 2,
    title: 'by bus',
    image: IMG_1006,
    mobileImg: IMG_0006,
    description: '',
    favorite: false,
  },
  {
    id: 3,
    title: 'pseudo',
    image: IMG_0003,
    mobileImg: IMG_0003,
    description: '',
    favorite: false,
  },
  {
    id: 4,
    title: 'welcome to home',
    image: IMG_1001,
    mobileImg: IMG_0001,
    description: 'Lorem ipsum dolores belgiium helium amros simbous tith',
    favorite: false,
  },
  {
    id: 5,
    title: 'happy new year',
    image: IMG_1004,
    mobileImg: IMG_0004,
    description: '',
    favorite: false,
  },
  {
    id: 6,
    title: 'in the metro',
    image: IMG_1005,
    mobileImg: IMG_0005,
    description: '',
    favorite: false,
  },
  {
    id: 7,
    title: 'city Dnipro',
    image: IMG_1000,
    mobileImg: IMG_0000,
    description: 'Lorem ipsum dolores belgiium helium amros simbous tith',
    favorite: false,
  },
];
