import { StaticImageData } from 'next/image';
import photo1 from './photos/1.jpg';
import photo2 from './photos/2.jpg';
import photo3 from './photos/3.jpg';
import photo4 from './photos/4.jpg';
import photo5 from './photos/5.jpg';
import photo6 from './photos/6.jpg';
import photo7 from './photos/7.jpg';

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
  slug: string;
};

const wondersImages: WonderImage[] = [
  {
    id: '1',
    name: 'Great Wall of China',
    src: photo1,
    photographer: 'Photo by Max van den Oetelaar on Unsplash',
    location: 'China',
    slug: 'great-wall-of-china',
  },
  {
    id: '2',
    name: 'Petra',
    src: photo2,
    photographer: 'Photo by Reiseuhu on Unsplash',
    location: 'Jordan',
    slug: 'petra',
  },
  {
    id: '3',
    name: 'Christ the Redeemer',
    src: photo3,
    photographer: 'Photo by Andrea Leopardi on Unsplash',
    location: 'Brazil',
    slug: 'christ-the-redeemer',
  },
  {
    id: '4',
    name: 'Machu Picchu',
    src: photo4,
    photographer: 'Photo by Jared Schwitzke on Unsplash',
    location: 'Peru',
    slug: 'machu-picchu',
  },
  {
    id: '5',
    name: 'Chichen Itza',
    src: photo5,
    photographer: 'Photo by E Mens on Unsplash',
    location: 'Mexico',
    slug: 'chichen-itza',
  },
  {
    id: '6',
    name: 'Roman Colosseum',
    src: photo6,
    photographer: 'Photo by Andrea Cipriano on Unsplash',
    location: 'Italy',
    slug: 'roman-colosseum',
  },
  {
    id: '7',
    name: 'Taj Mahal',
    src: photo7,
    photographer: 'Photo by Su San Lee on Unsplash',
    location: 'India',
    slug: 'taj-mahal',
  },
];

export default wondersImages;
