import { Body, Title } from '@/components/Common/Text';
import SectionLayout from '@/components/Layout/SectionLayout';

type Experience = {
  name: string;
  title: string;
  duration: string;
  description: string[];
};

const ExperienceSection = () => {
  const data: Experience[] = [
    {
      name: 'Sea Ltd.',
      title: 'Junior Engineer',
      duration: 'Aug 2022 - Present',
      description: [
        'On-the-job training covering the software engineering fundamentals, best coding practices and practical experience on common tech stacks and tools used in the industry',
      ],
    },
    {
      name: 'PT. Hamilton Prima Indonesia',
      title: 'Backend Engineer',
      duration: 'Oct 2021 - June 2022',
      description: [
        'Implemented REST API backend application using Django to provide a functional interface for a mobile application',
        'Improved the company\' development processes by introducing continuous integration and deployment practices',
      ],
    },
    {
      name: 'Jagawana, Incubation Program by Google',
      title: 'Lead Backend Engineer',
      duration: 'July - Dec 2021',
      description: [
        'Worked with real-world datasets to build and optimize CNN models for detecting chainsaw sounds from Mel Spectogram with hyperparameter tuning and regularization techniques',
        'Acquired and preprocessed data from public YouTube videos for training machine learning models using web scraping and data cleaning techniques',
      ],
    },
    {
      name: 'Widya Imersif Teknologi',
      title: 'Hardware Engineer Intern',
      duration: 'Jan - Mar 2021',
      description: [
        'Implemented Raspberry Pi VPN connection for a medical station to provide secure connectivity',
        'Successfully integrated medical sensors to Raspberry Pi through Bluetooth communication',
      ],
    },
    {
      name: 'Gadjah Mada Aerospace Team',
      title: 'Electrical Engineer',
      duration: '2018 - 2021',
      description: [
        'Collaborated on a multidiscplinary team to build a rocket payload for collecting atmospheric data, representing Indonesia as the 2nd place winner at AAS International CanSat Competition.',
        'Designed electronic system of small satellites and ground control system for real-time data acquisition.',
      ],
    },
  ];

  return (
    <SectionLayout title='Experience'>
      <div className='flex flex-col gap-4'>
        {data.map((e) => (
          <ExperienceCard key={e.name} experience={e} />
        ))}
      </div>
    </SectionLayout>
  );
};

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard = ({ experience: e }: ExperienceCardProps) => {
  return (
    <div>
      <div className='flex flex-col mb-2 md:mb-0 md:flex-row justify-between'>
        <Title>
          {e.name}, <span className='font-light'>{e.title}</span>
        </Title>
        <Body className='text-sm'>{e.duration}</Body>
      </div>
      <ul className='flex flex-col mt-1 list-disc md:ml-4'>
        {e.description.map((desc) => (
          <li key={desc} className='font-light'>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;
