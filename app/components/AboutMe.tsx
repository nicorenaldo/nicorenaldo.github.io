import { Title } from '@/components/Common/Text';
import SectionLayout from '@/components/Layout/SectionLayout';

const AboutMe = () => {
  return (
    <SectionLayout title='About Me'>
      <div className='flex flex-col gap-4'>
        <Title className='font-light'>
          Hello, I'm Nico Renaldo, a software engineer with a rich background in
          various technology domains. Currently, I'm working as a Site
          Reliability Engineer at Sea Ltd., My role involves troubleshooting
          various machine and network issues and developing internal platforms
          to automate manual operations, and ensuring seamless performance of
          our services.
        </Title>

        <Title className='font-light'>
          With a strong foundation in Linux, Golang, Python, and Operation, I am
          passionate about building and maintaining robust systems that can
          withstand high demand and deliver exceptional performance. In
          addition, I bring a diverse range of experiences from previous roles,
          including work in web development, machine learning, and embedded
          programming.
        </Title>

        <Title className='font-light'>
          Outside of work, I enjoy a sprinkle of outdoor activities, including
          trekking, table tennis, and board game activities. Moreover, I am
          deeply committed to giving back to the tech community by volunteering
          as a mentor for aspiring engineers. There's a unique satisfaction in
          guiding others on their path and seeing them overcome hurdles and grow
          in their skills.
        </Title>

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
