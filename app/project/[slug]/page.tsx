import Iframe from '@/components/Common/Iframe';
import Tags from '@/components/Common/Tags';
import { SubHeading } from '@/components/Common/Text';
import ProjectLayout from '@/components/Layout/ProjectLayout';
import { DefaultKeyword } from '@/data/keyword';
import { Project, emptyProject, projects } from '@/data/project/project';
import { Metadata, ResolvingMetadata } from 'next';

interface ProjectParams {
  name: string;
  description: string;
  thumbnail: string;
  slug: string;
  tags: string[];
}

const fetchProjectData = (slug: string): Project => {
  let results = projects.filter((p) => p.slug === slug);
  return results.at(0) ?? emptyProject;
};

export async function generateMetadata(
  { params }: { params: ProjectParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = fetchProjectData(params.slug);

  return {
    title: `${project.name} | Nico Renaldo`,
    description: project.description,
    keywords: `${project.keyword}, ${DefaultKeyword}`,
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    name: p.name,
    description: p.description,
    thumbnail: p.thumbnail,
    slug: p.slug,
    tags: p.tags,
  }));
}

export default function Project({ params }: { params: ProjectParams }) {
  const project = fetchProjectData(params.slug);

  return (
    <ProjectLayout title={project.name} date={project.date}>
      {project.content}

      {project.video !== undefined && (
        <>
          <SubHeading>Video</SubHeading>
          <Iframe src={project.video} />
        </>
      )}

      {project.tags.length > 0 && <Tags tags={project.tags} />}
    </ProjectLayout>
  );
}
