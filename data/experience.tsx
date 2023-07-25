export type Experience = {
  name: string;
  link?: string;
  jobTitle: string;
  location: string;
  duration: string;
  description: string[];
};

export const ExperienceData: Experience[] = [
  {
    name: 'Sea Ltd.',
    jobTitle: 'Site Reliability Engineer',
    location: 'Jakarta, Indonesia',
    duration: 'Aug 2022 - Present',
    link: 'https://www.linkedin.com/company/seagrp',
    description: [
      'Performed root cause analysis on a microservices architecture with over 1,265 services, diagnosing and rectifying issues at the node, network, and application levels.',
      'Engineered internal platforms that automated operations, widely adopted by the entire software engineering team, streamlining workflow and significantly reducing manual workload.',
      'Implemented service capacity analysis before campaigns, successfully managing service availability for over 4 million concurrent users during peak traffic, thus ensuring a seamless user experience.',
    ],
  },
  {
    name: 'Bangkit Academy led by Google',
    jobTitle: 'Capstone Project Advisor',
    location: 'Jakarta, Indonesia',
    duration: 'June - July 2023',
    link: 'https://grow.google/intl/id_id/bangkit',
    description: [
      'Leveraged extensive technical knowledge to 5 different teams, providing strategic guidance on application architecture design, development planning, and optimization of machine learning model deployment and training.',
      'Successfully led one team to achieve a top 20 project ranking, standing out amongst 500 other teams, by navigating complex challenges and implementing effective solutions.',
    ],
  },
  {
    name: 'PT. Hamilton Prima Indonesia',
    jobTitle: 'Backend Engineer',
    location: 'Jakarta, Indonesia',
    duration: 'Oct 2021 - June 2022',
    description: [
      'Developed a robust REST API backend application using Django, enhancing the functionality of a mobile application.',
      "Transformed the company's development processes by introducing continuous integration and deployment practices, leading to streamlined workflows and increased productivity.",
    ],
  },
  {
    name: 'Jagawana, Incubation Program by Google',
    jobTitle: 'Lead Engineer',
    location: 'Yogyakarta, Indonesia',
    duration: 'July - Dec 2021',
    link: 'https://indonesia.googleblog.com/2021/09/tim-terbaik-bangkit-raih-pendanaan-dari.html',
    description: [
      'Secured substantial funding from Google and the Ministry of Education, an honor bestowed to only 15 teams from over 3000 competitive participants',
      'Led the construction and optimization of CNN models for detecting chainsaw sounds using real-world datasets using Mel Spectogram data, implementing hyperparameter tuning and regularization techniques.',
      'Designed and implemented scripts to create a chainsaw sound database, leveraging public datasets and YouTube APIs. This automation process led to a time efficiency gain of 90% by streamlining data acquisition and preprocessing.',
    ],
  },
  // {
  //   name: 'Widya Imersif Teknologi',
  //   jobTitle: 'Hardware Engineer Intern',
  //   location: 'Yogyakarta, Indonesia',
  //   duration: 'Jan - Mar 2021',
  //   link: 'https://www.linkedin.com/company/widyaimersif',
  //   description: [
  //     'Established a secure Raspberry Pi VPN connection for a medical station, ensuring reliable and secure data transfer.',
  //     'Successfully integrated medical sensors with Raspberry Pi through Bluetooth communication.',
  //   ],
  // },
  // {
  //   name: 'Gadjah Mada Aerospace Team',
  //   jobTitle: 'Electrical Engineer',
  //   location: 'Yogyakarta, Indonesia',
  //   duration: '2018 - 2021',
  //   link: 'https://www.linkedin.com/company/gadjah-mada-aerospace-team',
  //   description: [
  //     'Participated in a multidisciplinary team to construct a rocket payload for atmospheric data collection, securing 2nd place for Indonesia at the AAS International CanSat Competition.',
  //     'Designed the electronic system for small satellites and a ground control system, enabling real-time data acquisition.',
  //   ],
  // },
];
