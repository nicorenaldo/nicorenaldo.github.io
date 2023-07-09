import { Body, Title } from '@/components/Common/Text';
import SectionLayout from '@/components/Layout/SectionLayout';

const AboutMe = () => {
  return (
    <SectionLayout title='About Me'>
      <div className='flex flex-col gap-4'>
        <Body>
          Hello, I'm Nico Renaldo, a software engineer with an extensive
          background across various technology domains. Having a solid
          foundation in full-stack development using Golang and React alongside
          extensive DevOps experience, I am passionate about building and
          maintaining robust systems that can withstand high demand and deliver
          exceptional performance.
        </Body>

        <Body>
          Previously served as a Site Reliability Engineer at Sea Ltd. My
          responsibilities included developing internal platforms to streamline
          and automate manual operations, ensuring the seamless performance of
          our services, and troubleshooting a variety of machine and network
          issues.
        </Body>

        <Body>
          Outside of work, I enjoy a sprinkle of outdoor activities, including
          trekking, table tennis, and board game activities. Moreover, I am
          deeply committed to giving back to the tech community by volunteering
          as a mentor for aspiring engineers. There's a unique satisfaction in
          guiding others on their path and seeing them overcome hurdles and grow
          in their skills.
        </Body>

        <Title className='w-fit px-2 lg:mx-2 transition-all shadow-[inset_0px_-3px_0px_0px_#007bff] hover:shadow-[inset_0px_-30px_0px_0px_#007bff] hover:prose-invert  cursor-pointer duration-300'>
          <a href='/nicorenaldo_resume.pdf' aria-label="Nico's Resume">
            View My Resume (PDF)
          </a>
        </Title>
      </div>
    </SectionLayout>
  );
};

export default AboutMe;
