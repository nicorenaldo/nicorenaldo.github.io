import { Body, Title } from '@/components/Common/Text';
import SectionLayout from '@/components/Layout/SectionLayout';
import { Achievement, AchievementData } from '@/data/achievement';

const AchievementSection = () => {
  return (
    <SectionLayout title='Achievement'>
      <div className='flex flex-col gap-4'>
        {AchievementData.map((e) => (
          <AchievementCard key={e.name} achievement={e} />
        ))}
      </div>
    </SectionLayout>
  );
};

type AchievementCardProps = {
  achievement: Achievement;
};

const AchievementCard = ({ achievement: e }: AchievementCardProps) => {
  return (
    <div>
      <div className='flex justify-between '>
        <a href={e.link} aria-label={`Webpage ${e.name}`} target='_blank'>
          <Title>{e.name}</Title>
        </a>
        <Body>{e.duration}</Body>
      </div>
      <Body>{e.organizer}</Body>
    </div>
  );
};

export default AchievementSection;
