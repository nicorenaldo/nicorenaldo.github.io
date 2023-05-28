import AyoLomba from './ayolomba';
import Dovi from './dovi';
import Itin from './itin';
import Jagawana from './jagawana';

export type Project = {
  name: string;
  date: string;
  description: string;
  thumbnail: string;
  slug: string;
  tags: string[];
  images: string[];
  content?: React.ReactNode;
  video?: string;
};

export const emptyProject: Project = {
  name: '404',
  date: '404',
  description: '404',
  thumbnail: '404',
  slug: '404',
  tags: [],
  images: [],
};

export const projects: Project[] = [
  {
    name: 'Dovi',
    date: '27 November 2022',
    description:
      'A mobile language learning app built with Flutter and Firebase that employs spaced repetition algorithm to improve user learning rate ',
    thumbnail: 'https://i.imgur.com/lg1uB4e.png',
    slug: 'dovi',
    tags: ['Flutter', 'Firebase'],
    images: [
      'https://i.imgur.com/lg1uB4e.png',
      'https://i.imgur.com/4slObAi.png',
    ],
    content: Dovi,
  },
  {
    name: 'Jagawana',
    date: '11 June 2021',
    description:
      'Research on chainsaw detection using IoT device and machine learning',
    thumbnail: 'https://i.imgur.com/u7JWAoM.png',
    slug: 'jagawana',
    tags: ['Audio Signal Processing', 'Tensorflow', 'IoT', 'Google Cloud'],
    images: [
      'https://imgur.com/u7JWAoM.png',
      'https://imgur.com/exxj7EQ.png',
      'https://imgur.com/zkthst5.png',
      'https://imgur.com/oGCEllK.png',
    ],
    content: Jagawana,
  },
  {
    name: 'Itin',
    date: '11 June 2021',
    description:
      'A trip planning web application to easily make, share, and browse itineraries',
    thumbnail: 'https://i.imgur.com/BLzc1fk.png',
    slug: 'itin',
    tags: ['Django'],
    images: [
      'https://imgur.com/EvnaPOT.png',
      'https://imgur.com/O3qGGHo.png',
      'https://imgur.com/fRftqWN.png',
      'https://imgur.com/aFztX9g.png',
    ],
    video: 'https://www.youtube.com/embed/QpfyA9de6zk',
    content: Itin,
  },
  {
    name: 'AyoLomba!',
    date: '11 June 2021',
    description:
      'A centralized web platform to manage competition registration and advertising',
    thumbnail: 'https://i.imgur.com/rzziXmO.png',
    slug: 'ayolomba',
    tags: ['Django'],
    images: [
      'https://i.imgur.com/KUc51Xn.png',
      'https://i.imgur.com/LWZs90l.png',
      'https://i.imgur.com/TSHCNSu.png',
    ],
    content: AyoLomba,
  },
];
