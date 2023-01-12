import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../../components/Common/Icon";
import { Image } from "../../../components/Common/Image";
import { Body, Caption, Title } from "../../../components/Common/Text";
import SectionLayout from "../../../components/Layout/SectionLayout";

type Project = {
    name: string;
    description: string;
    thumbnail: string;
    slug: string;
    tags: string[];
}

const ProjectSection = () => {
    const data: Project[] = [
        // TODO: Tambahin Gobi, Project di Shopee ?
        {
            name: "Dovi",
            description: "A mobile language learning app built with Flutter and Firebase that employs spaced repetition algorithm to improve user learning rate ",
            thumbnail: 'https://i.imgur.com/lg1uB4e.png',
            slug: "dovi",
            tags: ["Flutter", "Firebase"],
        },
        {
            name: "Jagawana",
            description: "Research on chainsaw detection using IoT device and machine learning",
            thumbnail: 'https://imgur.com/u7JWAoM.png',
            slug: "jagawana",
            tags: ["Audio Signal Processing", "Tensorflow", "IoT", "Google Cloud"],
        },
        {
            name: "Itin",
            description: "A trip planning web application to easily make, share, and browse itineraries",
            thumbnail: 'https://imgur.com/BLzc1fk.png',
            slug: "itin",
            tags: ["Django"],
        },
        {
            name: "AyoLomba!",
            description: "A centralized web platform to manage competition registration and advertising",
            thumbnail: 'https://imgur.com/rzziXmO.png',
            slug: "ayolomba",
            tags: ["Django"],
        },
    ]

    return <SectionLayout title="My Project">
        <div className="flex flex-col gap-10">
            {
                data.map((e, index) => <ProjectCard key={index} project={e} />)
            }

        </div>
    </SectionLayout>
}

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project: e }: ProjectCardProps) => {
    return <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
        <div className="basis-2/4 md:basis-1/4">
            <Link to={`/projects/${e.slug}`} aria-label={`Navigate to project ${e.name}`}>
                <Image src={e.thumbnail} alt="thumbnail" className="rounded" />
            </Link>
        </div>

        <div className="w-full md:basis-3/4">
            <Link to={`/projects/${e.slug}`} aria-label={`Navigate to project ${e.name}`}>
                <Title className="group flex gap-4 items-center">{e.name}
                    <ArrowRightIcon className="h-4 group-hover:translate-x-2 transition-all" /></Title>
            </Link>
        
            <Body>{e.description}</Body>
        
            <div className="flex flex-wrap mt-2 gap-2">
                {e.tags.map((tag) => (
                    <Caption key={tag} className="border-primary border py-1 px-2 rounded text-primary font-medium font-inconsolata">{tag}</Caption>
                ))}
            </div>
        </div>
    </div>
}

export default ProjectSection