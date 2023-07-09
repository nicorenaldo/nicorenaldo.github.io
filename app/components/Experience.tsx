import { Body, Title } from '@/components/Common/Text';
import SectionLayout from '@/components/Layout/SectionLayout';
import { Experience, ExperienceData } from '@/data/experience';

const ExperienceSection = () => {
  return (
    <SectionLayout title='Experience'>
      <div className='flex flex-col gap-4'>
        {ExperienceData.map((e) => (
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
        <a href={e.link} target='_blank' aria-label={e.name}>
          <Title>
            {e.name}, <span className='font-normal'>{e.jobTitle}</span>
          </Title>
        </a>
        <Body className='text-sm'>{e.duration}</Body>
      </div>
      <div>
        <Body className='text-sm'>{e.location}</Body>
      </div>
      <ul className='flex flex-col mt-1 list-disc md:ml-4'>
        {e.description.map((desc) => (
          <li key={desc} className='font-normal'>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;
