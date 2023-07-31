import { StaticImageData } from 'next/image';
import Dovi from './dovi';
import Jagawana from './jagawana';

import doviThumbnail from '@/public/images/project/dovi-thumbnail.webp';
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
      'Powerful, intelligent flash cards made specially for language learning',
    thumbnail: doviThumbnail,
    slug: 'dovi',
    tags: ['Flutter', 'Firebase'],
    content: Dovi,
    keyword:
      'Dovi, language learning, mobile learning, spaced repetition, flashcard app, flutter development, firebase, educational app, user learning efficiency, language retention',
  },
  {
    name: 'Jagawana',
    date: '11 June 2021',
    description:
      'Jagawana is an advanced system utilizing IoT and Machine Learning to detect chainsaw sounds from audio record, aiming to prevent illegal logging.',
    thumbnail: jagawanaThumbnail,
    slug: 'jagawana',
    tags: ['Audio Signal Processing', 'Tensorflow', 'IoT', 'Google Cloud'],
    content: Jagawana,
    keyword:
      'Jagawana, audio signal processing, chainsaw detection, IoT in environmental preservation, machine learning, tensorflow, google cloud, forest preservation, environmental technology, sound classification, bangkit 2021',
  },
  // {
  //   name: 'Itin',
  //   date: '11 June 2021',
  //   description:
  //     'A trip planning web application to easily make, share, and browse itineraries',
  //   thumbnail: itinThumbnail,
  //   slug: 'itin',
  //   tags: ['Django'],
  //   video: 'https://www.youtube.com/embed/QpfyA9de6zk',
  //   content: Itin,
  //   keyword:
  //     'itin, trip planning, web app, django, itinerary, technoscape binus, bncc',
  // },
  // {
  //   name: 'AyoLomba!',
  //   date: '11 June 2021',
  //   description:
  //     'A centralized web platform to manage competition registration and advertising',
  //   thumbnail: ayolombaThumbnail,
  //   slug: 'ayolomba',
  //   tags: ['Django'],
  //   content: AyoLomba,
  //   keyword: 'ayolomba, web app, django',
  // },
];
