import { StaticImageData } from 'next/image';
import SecuringRaspi from './1-securing-raspi';
import HeadlessRaspi from './2-headless-raspi';

import securingRaspiThumbnail from '@/public/images/blog/1-openvpn-raspi.webp';
import headlessRaspiThumbnail from '@/public/images/blog/2-raspi-banner.webp';
import jagawanaThumbnail from '@/public/images/blog/5-waveform.webp';
import JagawanaOverview from './3-jagawana-overview';
import JagawanaIoT from './4-jagawana-iot';
import JagawanaML from './5-jagawana-ml';

export type Post = {
  date: string;
  title: string;
  description: string;
  slug: string;
  thumbnail?: StaticImageData;
  content?: React.ReactNode;
  keyword: string;
};

export const emptyPost: Post = {
  date: '404',
  title: '404',
  description: '404',
  slug: '404',
  keyword: '',
};

export const posts: Post[] = [
  {
    date: '10 June 2021',
    title: 'Jagawana — Machine Learning In Depth',
    description:
      'Jagawana is a Wide Sensor Network System deployed in the forests to prevent Ilegal Logging. By using sensors to pick up voices in the forests, we could monitor what happened in the forest in real-time.',
    slug: 'jagawana-machine-learning',
    thumbnail: jagawanaThumbnail,
    content: JagawanaML,
    keyword:
      'jagawana, bangkit 2021, top 15 project, google bangkit, google, chainsaw detection, cnn model, machine learning, sound classification, tensorflow, audio signal processing',
  },
  {
    date: '05 June 2021',
    title: 'Jagawana — Internet of Things in Depth',
    description:
      'Jagawana is a Wide Sensor Network System deployed in the forests to prevent Ilegal Logging. By using sensors to pick up voices in the forests, we could monitor what happened in the forest in real-time.',
    slug: 'jagawana-iot',
    content: JagawanaIoT,
    keyword:
      'jagawana, bangkit 2021, top 15 project, google bangkit, google, chainsaw detection, cnn model, machine learning, sound classification, tensorflow, audio signal processing',
  },
  {
    date: '16 May 2021',
    title: 'Detecting Chainsaws in Forest with Machine Learning — Jagawana',
    description:
      'Jagawana is a Wide Sensor Network System deployed in the forests to prevent Ilegal Logging. By using sensors to pick up voices in the forests, we could monitor what happened in the forest in real-time.',
    slug: 'jagawana-overview',
    content: JagawanaOverview,
    keyword:
      'jagawana, bangkit 2021, top 15 project, google bangkit, google, chainsaw detection, cnn model, machine learning, sound classification, tensorflow, audio signal processing',
  },
  {
    date: '04 March 2021',
    title: 'Headless Raspberry Pi 3 B+ SSH & WiFi Setup',
    description:
      'This article covers setting up the Raspberry Pi 3 Model B+ for headless SSH access over WiFi using Windows 10.',
    slug: 'headless-raspi',
    thumbnail: headlessRaspiThumbnail,
    content: HeadlessRaspi,
    keyword: 'raspi, raspberry pi, headless, setup',
  },
  {
    date: '11 February 2021',
    title: 'Securing Raspberry Pi Connection with OpenVPN',
    description:
      'The connection on your IoT project using Raspi may not be as secure as you think, amateur hackers can see everything you do online with simple tools like Packet Sniffers.',
    slug: 'securing-raspi',
    thumbnail: securingRaspiThumbnail,
    content: SecuringRaspi,
    keyword: 'raspberry pi, raspi, openvpn',
  },
];
