import { PointRightIcon } from '@/components/Common/Icon';
import { Heading, Title } from '@/components/Common/Text';

const Banner = () => {
  return (
    <div className='xl:min-h-[80vh] flex flex-col gap-12 mt-8 mb-16 xl:mb-0 xl:mt-24 xl:mr-96 z-10'>
      <Heading className=''>Hello!</Heading>
      <Heading>
        I`m <span className='font-bold'>Nico Renaldo</span>, a software engineer
        focused on building creative solutions through technology
      </Heading>
      <div className='flex gap-2'>
        <Title className='font-normal mr-4'>Get in touch</Title>
        <PointRightIcon className='w-auto h-7 hidden lg:block' />
        <Title className='px-2 lg:mx-2 transition-all shadow-[inset_0px_-3px_0px_0px_#007bff] hover:shadow-[inset_0px_-30px_0px_0px_#007bff] hover:prose-invert cursor-pointer duration-300'>
          <a
            href='mailto:nicorenald@gmail.com'
            aria-label='Email to Nico Renaldo'
          >
            nicorenald@gmail.com
          </a>
        </Title>
      </div>
    </div>
  );
};

export default Banner;
