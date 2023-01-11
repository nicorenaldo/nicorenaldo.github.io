import { Title } from "../../../components/Common/Text"
import SectionLayout from "../../../components/Layout/SectionLayout"

const AboutMe = () => {
    return <SectionLayout title="About Me">
        <Title className="font-light">
            I am a software engineer with over 3 years experience working on complex research initiatives. I'm passionate about software development, electronics, and nature. Especially when it's all combined.
        </Title>
        <br />
        <Title className="font-light">
            Currently employed as a junior engineer at Sea Ltd., A company focusing on e-Commerce, Banking and Gaming industry. I am currently taking part of the on-the-job training covering the software engineering fundamentals, best coding practices on common tech stacks and tools used in the industry.
        </Title>
        {/* TODO: Insert my extra-curricular activities / hobby */}
        <br />
        <Title className="w-fit px-2 lg:mx-2 transition-all shadow-[inset_0px_-3px_0px_0px_#007bff] hover:shadow-[inset_0px_-30px_0px_0px_#007bff] hover:text-white cursor-pointer duration-300">
            <a href="/nicorenaldo_resume.pdf" aria-label="Nico's Resume">View My Resume (PDF)</a>
        </Title>
    </SectionLayout>
}

export default AboutMe