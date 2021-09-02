import PHOTO from './images/Patrick_Bateman.jpg';
import BACKGROUND from './images/DSC_5907.jpg';

export interface UserType {
  name: string;
  photo: string;
  background: string;
  website: string;
  interests: string[];
}

export const USER = {
  name: 'Nathaniel Merriweather',
  photo: PHOTO,
  background: BACKGROUND,
  website: 'www.murders.com',
  interests: ['pornography', 'hate', 'art', 'animals', 'tools', 'knifes', 'fullmetal jacets', 'night strets'],
};
