'use client';

import { Heading, Title } from '@/components/Common/Text';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

const Banner = () => {
  return (
    <div className='xl:min-h-[80vh] flex flex-col gap-12 mt-8 mb-16 xl:mb-0 lg:mt-18 xl:mt-24 xl:pr-96 z-10'>
      <Heading className=''>Hello!</Heading>
      <Heading>
        I'm <span className='font-bold'>Nico Renaldo</span>
      </Heading>
      <Heading>
        A software engineer specialized in web development and machine learning,
        focused on building creative and scalable solutions
      </Heading>
      <div className='flex gap-2 items-center'>
        <Title className='font-normal'>Get in touch</Title>
        <div className='flex gap-2  '>
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};

const ContactIcons = () => {
  return (
    <>
      <a
        href='mailto:nicorenald@gmail.com'
        aria-label='Email Nico Renaldo'
        target='_blank'
      >
        <MailIcon className='h-8 w-8 text-gray-500 hover:text-gray-400 transition-colors' />
      </a>
      <a
        href='https://github.com/nicorenaldo'
        aria-label="Nico Renaldo's GitHub"
        target='_blank'
      >
        <GitHubIcon className='h-8 w-8 text-gray-500 hover:text-gray-400 transition-colors' />
      </a>
      <a
        href='https://linkedin.com/in/nicorenaldo'
        aria-label="Nico Renaldo's LinkedIn"
        target='_blank'
      >
        <LinkedInIcon className='h-8 w-8 text-gray-500 hover:text-gray-400 transition-colors' />
      </a>
    </>
  );
};

export default Banner;
