import { ArrowRightIcon } from '@/components/Common/Icon';
import { Body, Caption, Title } from '@/components/Common/Text';
import SectionLayout from '@/components/Layout/SectionLayout';
import { Project, projects } from '@/data/project/project';
import Image from 'next/image';
import Link from 'next/link';

const ProjectSection = () => {
  return (
    <SectionLayout title='My Project'>
      <div className='flex flex-col gap-10'>
        {projects.map((e, index) => (
          <ProjectCard key={index} project={e} />
        ))}
      </div>
    </SectionLayout>
  );
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project: e }: ProjectCardProps) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 items-center md:items-start'>
      <div className='basis-2/4 md:basis-1/4 relative w-full aspect-[2/1]'>
        <Image
          src={e.thumbnail}
          alt='thumbnail'
          className='rounded'
          fill={true}
        />
      </div>

      <div className='w-full md:basis-3/4'>
        <Link
          href={`/project/${e.slug}`}
          aria-label={`Navigate to project ${e.name}`}
        >
          <Title className='group flex gap-4 items-center'>
            {e.name}
            <ArrowRightIcon className='h-4 group-hover:translate-x-2 transition-all' />
          </Title>
        </Link>

        <Body>{e.description}</Body>

        <div className='flex flex-wrap mt-2 gap-2'>
          {e.tags.map((tag) => (
            <Caption
              key={tag}
              className='border-primary border py-1 px-2 rounded text-primary font-medium font-inconsolata'
            >
              {tag}
            </Caption>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
