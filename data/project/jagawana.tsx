import Carousel from '@/components/Common/Carousel';
import { HorizontalDivider } from '@/components/Common/Divider';
import { ImageCaption } from '@/components/Common/ImageCaption';
import Quote from '@/components/Common/Quote';
import { Body, SubHeading } from '@/components/Common/Text';
import Image from 'next/image';

import jagawanaComparison from '@/public/images/project/jagawana-comparison.webp';
import jagawanaOverview from '@/public/images/project/jagawana-overview.webp';
import jagawanaThumbnail from '@/public/images/project/jagawana-thumbnail.webp';

const Jagawana = (
  <>
    <Quote>
      Research on chainsaw detection using IoT device and machine learning
    </Quote>
    <SubHeading>Project Brief</SubHeading>
    <Body>
      Jagawana is a wide sensor network system deployed in the forests to
      prevent <span className='font-bold'>ilegal logging</span>. We use sensors
      to pick up voices in the forests to monitor what happened in the forest in
      real-time. We use machine learning to process the sounds taken by the
      sensor and to identify the sounds into various categories, such as{' '}
      <span className='font-bold'>
        chainsaws, trucks, gunshot, and burning sounds
      </span>
      . We will be using Android App to monitor and notify the user if
      suspicious events were happening in the forest.
    </Body>
    <HorizontalDivider />
    <Body>
      This project combines{' '}
      <span className='font-bold'>
        machine learning, internet of things, cloud computing, and android
        application
      </span>
      . This project is part of{' '}
      <a
        href='https://grow.google/intl/id_id/bangkit/'
        className='font-bold underline'
      >
        Bangkit Academy&apos;s Capstone Project
      </a>
      . My role in this project involves creating the Machine Learning Model,
      designing and developing the Google Cloud Architecture, making the IoT
      prototype, and creating design and illustration.
    </Body>
    <Body>
      The machine learning model is developed on Kaggle using{' '}
      <a
        href='https://www.kaggle.com/mmoreaux/environmental-sound-classification-50'
        className='font-bold underline'
      >
        ESC-50 Audio Dataset
      </a>
      ,{' '}
      <a
        href='https://www.kaggle.com/chrisfilo/urbansound8k'
        className='font-bold underline'
      >
        Urbansound8k Dataset
      </a>
      , and{' '}
      <a
        href='https://research.google.com/audioset/'
        className='font-bold underline'
      >
        Google&apos;s Audioset
      </a>
      .
    </Body>
    <Body>
      We are using ESP32 and Mosquitto Broker to prototype the working device.
      The Google Cloud Platform then will receive and store the audio data using
      Pub/Sub as a trigger for the cloud functions to store the data to Cloud
      Storage and BigQuery. Every audio data inputted will be processed by our
      machine learning model deployed on the AI Platform. You can see the
      project overview on image below.
    </Body>

    <ImageCaption
      className='w-full'
      caption='Jagawana System Overview'
      img={<Image src={jagawanaOverview} alt='jagawana-system-overview' />}
    />

    <SubHeading>Photos</SubHeading>
    <Carousel
      cover={false}
      images={[jagawanaThumbnail, jagawanaComparison, jagawanaOverview]}
    />
  </>
);

export default Jagawana;
