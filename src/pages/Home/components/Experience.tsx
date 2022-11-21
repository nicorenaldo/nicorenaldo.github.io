import { Body } from "../../../components/Common/Text"
import SectionLayout from "../../../components/Layout/SectionLayout"

type Experience = {
    name: string;
    title: string;
    duration: string;
    description: string[];
}

const ExperienceSection = () => {
    const data: Experience[] = [
        {
            name: "PT. Hamilton Prima Indonesia",
            title: "Backend Engineer",
            duration: 'Oct 2021 - Present',
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
            name: "Bangkit Academy by Google",
            title: "Machine Learning Trainee",
            duration: 'Feb - June 2021',
            description: [
                "Developed an illegal logging solution by integrating machine learning and IoT sensors and attained the top 15 final projects from the total of 483 teams",
                "Performed data preparation, data preprocessing and created a CNN model which can detect chainsaw sounds from Mel Spectrogram data",
                "Graduated with distinction (top 10% performer) among 3000 participants from 250 universities in Indonesia"
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
                data.map((e) => <ExperienceCard experience={e} />)
            }

        </div>
    </SectionLayout>
}

type ExperienceCardProps = {
    experience: Experience
}

const ExperienceCard = ({ experience: e }: ExperienceCardProps) => {
    return <div>
        <div className="flex justify-between">
            <Body className="font-bold">{e.name}, <span className="font-light">{e.title}</span></Body>
            <Body className="text-sm">{e.duration}</Body>
        </div>
        <div className="flex flex-col mt-1">
            {e.description.map((desc) => <li className="font-light">{desc}</li>)}
        </div>
    </div>
}

export default ExperienceSection