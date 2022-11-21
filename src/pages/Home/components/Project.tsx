import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../../components/Common/Icon";
import { Body } from "../../../components/Common/Text"
import SectionLayout from "../../../components/Layout/SectionLayout"

type Project = {
    name: string;
    description: string;
    thumbnail: string;
    slug: string;
}

const ProjectSection = () => {
    const data: Project[] = [
        // TODO: Tambahin Dovi, Gobi?, Project di Shopee
        {
            name: "Jagawana",
            description: "Research on chainsaw detection using IoT device and machine learning",
            thumbnail: 'https://imgur.com/u7JWAoM.png',
            slug: "jagawana",
        },
        {
            name: "Itin",
            description: "A trip planning web application to easily make, share, and browse itineraries",
            thumbnail: 'https://imgur.com/BLzc1fk.png',
            slug: "itin",
        },
        {
            name: "AyoLomba!",
            description: "A centralized web platform to manage competition registration and advertising",
            thumbnail: 'https://imgur.com/rzziXmO.png',
            slug: "ayolomba",
        },
    ]

    return <SectionLayout title="My Project">
        <div className="flex flex-col gap-10">
            {
                data.map((e) => <ProjectCard project={e} />)
            }

        </div>
    </SectionLayout>
}

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project: e }: ProjectCardProps) => {
    return <div className="flex gap-4 items-center md:items-start">
        <div className="basis-2/4 md:basis-1/4">
            <Link to={`/projects/${e.slug}`} >
                <img src={e.thumbnail} alt="thumbnail" className="rounded" />
            </Link>
        </div>
        <div className="basis-2/4 md:basis-3/4">
            <Link to={`/projects/${e.slug}`} >
                <Body className="font-bold group flex gap-4 items-center">{e.name}
                    <ArrowRightIcon className="h-4 group-hover:translate-x-2 transition-all" /></Body>
            </Link>
            <Body className="text-sm">{e.description}</Body>
        </div>
    </div>
}

export default ProjectSection