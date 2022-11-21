import { Body, Title } from "../../../components/Common/Text"
import SectionLayout from "../../../components/Layout/SectionLayout"

const AboutMe = () => {
    return <SectionLayout title="About Me">
        <Body id="#about">A determined final year student at Gadjah Mada University with focus on software and computer.</Body>
        <br />
        <Body>Contributed on multiple research project as software engineer, focusing on backend and devops.</Body>
        <br />
        <Title className="w-fit px-2 lg:mx-2 transition-all shadow-[inset_0px_-3px_0px_0px_#007bff] hover:shadow-[inset_0px_-30px_0px_0px_#007bff] hover:text-white cursor-pointer duration-300">
            <a href="/nicorenaldo_resume.pdf">View My Resume (PDF)</a>
        </Title>
    </SectionLayout>
}

export default AboutMe