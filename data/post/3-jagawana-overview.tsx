import { ImageCaption } from '@/components/Common/ImageCaption';
import { Body, SubHeading, Title } from '@/components/Common/Text';
import Image from 'next/image';

import Iframe from '@/components/Common/Iframe';
import jagawanaIllustration from '@/public/images/project/jagawana-illustration.webp';
import jagawanaOverview from '@/public/images/project/jagawana-overview.webp';
import jagawanaThumbnail from '@/public/images/project/jagawana-thumbnail.webp';
import Link from 'next/link';

const JagawanaOverview = (
  <>
    <Body>
      In the last post, I talked about my experience at Bangkit Academy 2021 as
      a Machine Learning Path Participant. After completing the assigned course,
      we were given a task to do a capstone project by solving a real-life
      project using our knowledge on Machine Learning, Android Development, and
      Cloud Computing.
    </Body>

    <Body>
      After forming our group (2 members from each learning path), we start
      brainstorming our ideas, looking over various themes and different
      problems, and eventually, we decided to tackle the problem of illegal
      logging through Indonesia's forest. While it may not have huge business
      potential like Bangkit intended, we still think this idea is unique and
      interesting to tackle and could be implemented in this very nation.
    </Body>

    <SubHeading>Problems and Solutions</SubHeading>
    <Body>
      Forests are huge and the terrain is hard to pass through, on the other
      side, forest ranger usually comprises of only several people. Often,
      rangers are patrolling the forest area for 1-2 weeks in a month, which
      means there are many opportunities for illegal loggers to get in and out
      without any patrol. This gap hole could be prevented by incorporating
      technology for the ranger and forests.
    </Body>
    <Body>
      <span className='font-bold'>Jagawana</span> is a Wide Sensor Network
      System deployed in the forests to prevent Ilegal Logging. By using sensors
      to pick up voices in the forests, we could monitor what happened in the
      forest in real-time. We deployed a Machine Learning Model to process the
      sounds taken by the sensor, then the model will identify the sounds into
      various categories, such as chainsaws, trucks, gunshot, and burning
      sounds. We will be using Android App to monitor and notify the user if
      suspicious events were happening in the forest, the user could also be
      able to hear the sound itself to ensure the results are correct.
    </Body>
    <ImageCaption
      className=''
      caption='Jagawana System Overview'
      img={<Image src={jagawanaThumbnail} alt='system overview' />}
    />

    <SubHeading>System Overview</SubHeading>
    <Body>
      There are four key components in this project, from{' '}
      <span className='font-bold'>Wide Sensor Network</span> (WSN) as our ears,{' '}
      <span className='font-bold'>Machine Learning, Google Cloud Platform</span>{' '}
      to deploy our model and receive messages from sensors, and{' '}
      <span className='font-bold'>Android App</span> to access data and receive
      notification. I will explain the system design and some considerations we
      made during the project.
    </Body>

    <Title>1. Wide Sensor Network</Title>
    <Body>
      As the ears of our project, the sensor network is going to be deployed on
      the forest, complete with a microphone, microcontroller, SD Card, RF
      transmitter, battery, and solar panels. There are many papers discussing
      the deployment system of the WSN, but our project is really limited to
      time and costs, so what we are going to do is making a prototype on our
      home using ESP32 and a Microphone. If you are familiar with the concept of
      IoT, the ESP32 will be our sensor nodes and we are using a Laptop with
      Mosquitto Broker as our gateway. The ESP32 will send the audio data to the
      gateway, where the audio data will be forwarded to our cloud API. Check
      the details on this post
    </Body>

    <ImageCaption
      className=''
      caption='Wide Sensor Network Illustration'
      img={
        <Image
          src={jagawanaIllustration}
          alt='wide sensor network illustration'
        />
      }
    />

    <Title>2. Google Cloud Platform</Title>
    <Body>
      To connect all three parts of our project, we are going to use Google
      Cloud Platform (GCP) to receive payloads from Sensor Nodes, deploying ML
      model and predicting sounds, managing databases, and creating an API for
      Android App. We use our free trial budget for this project, so that means
      you could replicate our works for free too. The service we are using for
      the sensor networks are IoT Core for registering device and Pub/Sub
      service for receiving the data through MQTT. To collect the data received,
      we are using a Cloud Functions service with Pub/Sub message as the
      trigger. The cloud function when triggered will save the received message
      to BigQuery and Cloud Storage. We use the AI Platform service to deploy
      our model for online prediction. We use a Flask server hosted on GCP App
      Engine as an API for the Android App to access the database. I will
      explain the services we use in detail later in a separate (tba).
    </Body>

    <Title>3. Machine Learning Model</Title>
    <Body>
      Our machine learning model task is to classify sounds into various
      categories, the number of categories it could predict depends on the
      dataset it is used to train to. Due to limitations of time and data,
      currently, we are only classifying chainsaws, crackling fire, and gunshot
      sounds. I'm using Kaggle to train the model, where the model will be
      deployed in GCP. More details on the journey of developing the Machine
      Learning Model here.
    </Body>

    <Title>4. Android Application</Title>
    <Body>
      The Android App will be our last checkpoint, we are going to access the
      data stored and processed by GCP using Android App. The app's main tasks
      are to notify the user if there were any suspicious activity, giving maps
      of location, and playing the suspicious audio detected.
    </Body>

    <Title>Our overall project would look like the image below.</Title>

    <ImageCaption
      className=''
      caption='Project Design Overview'
      img={<Image src={jagawanaOverview} alt='design overview' />}
    />

    <Title>Here is a simple demo of our project</Title>
    <Iframe src='https://www.youtube.com/embed/nLUPU1pUyE0' />

    <SubHeading>End of Words</SubHeading>
    <Body>
      We are working towards completing our MVP product, but there are still
      many improvements and features that we could add to the project. Some of
      the features that we didn't include is using ML to map out animal's
      habitat using their sounds and detecting human voices. I hope this article
      would inspire others to take the research further, feel free to
      ask/discuss in the comment section.
    </Body>

    <SubHeading>Continue reading about Jagawana</SubHeading>
    <Body>
      <Link href='/blog/jagawana-iot' className='font-bold underline'>
        The IoT component of Jagawana
      </Link>
      <br />
      <Link
        href='/blog/jagawana-machine-learning'
        className='font-bold underline'
      >
        The machine learning behind Jagawana
      </Link>
    </Body>
  </>
);

export default JagawanaOverview;
