import { StaticImageData } from 'next/image';
import AyoLomba from './ayolomba';
import Dovi from './dovi';
import Itin from './itin';
import Jagawana from './jagawana';

import ayolombaThumbnail from '@/public/images/project/ayolomba-thumbnail.webp';
import doviThumbnail from '@/public/images/project/dovi-thumbnail.webp';
import itinThumbnail from '@/public/images/project/itin-thumbnail.webp';
import jagawanaThumbnail from '@/public/images/project/jagawana-thumbnail.webp';

export type Project = {
  name: string;
  date: string;
  description: string;
  thumbnail: StaticImageData;
  slug: string;
  tags: string[];
  content?: React.ReactNode;
  video?: string;
  keyword: string;
};

export const emptyProject: Project = {
  name: '404',
  date: '404',
  description: '404',
  thumbnail: { src: '', height: 0, width: 0 },
  slug: '404',
  tags: [],
  keyword: '404',
};

export const projects: Project[] = [
  {
    name: 'Dovi',
    date: '27 November 2022',
    description:
      'A mobile language learning app built with Flutter and Firebase that employs spaced repetition algorithm to improve user learning rate.',
    thumbnail: doviThumbnail,
    slug: 'dovi',
    tags: ['Flutter', 'Firebase'],
    content: Dovi,
    keyword:
      'flutter, firebase, dovi, flashcard, spaced repetition, language learning app',
  },
  {
    name: 'Jagawana',
    date: '11 June 2021',
    description:
      'Research on chainsaw detection using IoT device and machine learning',
    thumbnail: jagawanaThumbnail,
    slug: 'jagawana',
    tags: ['Audio Signal Processing', 'Tensorflow', 'IoT', 'Google Cloud'],
    content: Jagawana,
    keyword:
      'jagawana, bangkit 2021, top 15 project, google bangkit, google, chainsaw detection, cnn model, machine learning, sound classification, tensorflow, audio signal processing',
  },
  {
    name: 'Itin',
    date: '11 June 2021',
    description:
      'A trip planning web application to easily make, share, and browse itineraries',
    thumbnail: itinThumbnail,
    slug: 'itin',
    tags: ['Django'],
    video: 'https://www.youtube.com/embed/QpfyA9de6zk',
    content: Itin,
    keyword:
      'itin, trip planning, web app, django, itinerary, technoscape binus, bncc',
  },
  {
    name: 'AyoLomba!',
    date: '11 June 2021',
    description:
      'A centralized web platform to manage competition registration and advertising',
    thumbnail: ayolombaThumbnail,
    slug: 'ayolomba',
    tags: ['Django'],
    content: AyoLomba,
    keyword: 'ayolomba, web app, django',
  },
];
