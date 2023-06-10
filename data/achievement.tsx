export type Achievement = {
  name: string;
  organizer: string;
  duration: string;
  link: string;
};

export const AchievementData: Achievement[] = [
  {
    name: 'Top 15 Capstone Project',
    organizer: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    duration: '2021',
    link: 'https://grow.google/intl/id_id/bangkit/',
  },
  {
    name: '1st Runner Up Winner at Hackathon x Business Case Competition',
    organizer: '180 Degree Consulting UGM',
    duration: '2021',
    link: 'https://180dcugm.org/',
  },
  {
    name: '1st Runner Up Winner at Hackathon 2.0 Technoscape',
    organizer: 'Binus Computer Club(BNCC)',
    duration: '2021',
    link: 'https://www.instagram.com/technoscapebncc/',
  },
  {
    name: '2nd Place Winner at AAS International CanSat Competition',
    organizer: 'American Astronautical Society (AAS)',
    duration: '2020',
    link: 'http://cansatcompetition.com/',
  },
];
