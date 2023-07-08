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
      'Dive deep into the machine learning aspects of Jagawana, a system designed to prevent illegal logging. Learn how we utilize audio signal processing and sound classification to monitor forest activities.',
    slug: 'jagawana-machine-learning',
    thumbnail: jagawanaThumbnail,
    content: JagawanaML,
    keyword:
      'jagawana, bangkit 2021, machine learning, sound classification, tensorflow, audio signal processing, illegal logging prevention, forest conservation, CNN model, sensor networks, real-time monitoring, google bangkit, google',
  },
  {
    date: '05 June 2021',
    title: 'Jagawana — Internet of Things in Depth',
    description:
      'Discover the IoT components of Jagawana. Understand how our wide sensor network operates in real-time to capture and process sounds from the forest, aiding in the fight against illegal logging.',
    slug: 'jagawana-iot',
    content: JagawanaIoT,
    keyword:
      'jagawana, bangkit 2021, internet of things, IoT, sensor networks, real-time monitoring, forest conservation, illegal logging prevention, sound processing, google bangkit, google',
  },
  {
    date: '16 May 2021',
    title: 'Jagawana - Detecting Chainsaws in Forest with Machine Learning',
    description:
      'How Jagawana uses machine learning to detect chainsaw noises in forests. This innovative approach contributes to the ongoing efforts to curb illegal logging activities.',
    slug: 'jagawana-overview',
    content: JagawanaOverview,
    keyword:
      'jagawana, bangkit 2021, chainsaw detection, machine learning, sound classification, tensorflow, audio signal processing, forest conservation, illegal logging prevention, CNN model, sensor networks, real-time monitoring, google bangkit, google',
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
