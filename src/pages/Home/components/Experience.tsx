import { Body, Title } from "../../../components/Common/Text";
import SectionLayout from "../../../components/Layout/SectionLayout";

type Experience = {
    name: string;
    title: string;
    duration: string;
    description: string[];
}

const ExperienceSection = () => {
    const data: Experience[] = [
        {
            name: "Sea Ltd.",
            title: "Junior Engineer",
            duration: 'Aug 2022 - Present',
            description: [
                "On-the-job training  covering the software engineering fundamentals, best coding practices on common tech stacks and tools used in the industry",
            ]
        },
        {
            name: "PT. Hamilton Prima Indonesia",
            title: "Backend Engineer",
            duration: 'Oct 2021 - June 2022',
            description: [
                "Develop and design a backend architecture for property rental application",
                "Generated unit testing and documentation for the Android teams"
            ]
        },
        {
            name: "Jagawana, Incubation Program by Google",
            title: "Lead Backend Engineer",
            duration: 'July - Dec 2021',
            description: [
                "Co-managed a $10,000 research grant, ensured completion of all project deliverables",
                "Assembled an IoT model for distinguishing chainsaws sounds by utilizing AI on a cloud server"
            ]
        },
        {
            name: "Widya Imersif Teknologi",
            title: "Hardware Engineer Intern",
            duration: 'Jan - Mar 2021',
            description: [
                "Collaborated on a multi-disciplinary project aimed at developing medical stations to provide easy self-checkup",
                "Integrated glucose and cholesterol sensors to a medical station using Bluetooth communication"
            ]
        },
        {
            name: "Gadjah Mada Aerospace Team",
            title: "Electrical Engineer",
            duration: 'Nov 2018 - June 2021',
            description: [
                "Collaborated with nine other members to build a rocket payload for collecting atmospheric data, representing Indonesia as the 2nd place winner at AAS International CanSat Competition",
                "Engineered, tested, and integrated the electrical sub-system for the rocket payload and the ground control system"
            ]
        }
    ]

    return <SectionLayout title="Experience">
        <div className="flex flex-col gap-10">
            {
                data.map((e) => <ExperienceCard key={e.name} experience={e} />)
            }

        </div>
    </SectionLayout>
}

type ExperienceCardProps = {
    experience: Experience
}

const ExperienceCard = ({ experience: e }: ExperienceCardProps) => {
    return <div>
        <div className="flex flex-col mb-2 md:mb-0 md:flex-row justify-between">
            <Title>{e.name}, <span className="font-light">{e.title}</span></Title>
            <Body className="text-sm">{e.duration}</Body>
        </div>
        <ul className="flex flex-col mt-1 list-disc md:ml-4">
            {e.description.map((desc) => <li key={desc} className="font-light">{desc}</li>)}
        </ul>
    </div>
}

export default ExperienceSection