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
      'Conducted root cause analysis on node, network, and application level, ensuring system uptime and performance.',
      'Developed internal platforms to automate operations, resulting in improved efficiency and reduced manual workload.',
      'Implemented service capacity analysis before campaigns, ensuring seamless user experience and service availability.',
    ],
  },
  {
    name: 'Bangkit Academy led by Google',
    jobTitle: 'Capstone Project Advisor',
    location: 'Jakarta, Indonesia',
    duration: 'June - July 2023',
    link: 'https://grow.google/intl/id_id/bangkit',
    description: [
      'Leveraged extensive technical knowledge to help teams navigate complex challenges and implement effective solutions.',
      'Provided strategic guidance to various teams on application architecture design and development planning.',
      'Advised teams on technical aspects such as machine learning models deployment and training optimization.',
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
      'Constructed and optimized CNN models using real-world datasets for detecting chainsaw sounds using Mel Spectogram data with hyperparameter tuning and regularization techniques',
      'Acquired and preprocessed data from YouTube videos for machine learning models, utilizing web scraping and data cleaning techniques.',
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
