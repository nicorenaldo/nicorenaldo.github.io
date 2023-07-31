import { ArrowRightIcon } from '@/components/Common/Icon';
import { Body } from '@/components/Common/Text';
import SectionLayout from '@/components/Layout/SectionLayout';
import Link from 'next/link';

const BlogRedirect = () => {
  return (
    <SectionLayout title='Blogs'>
      <Link href='/blog' aria-label='Navigate to blog'>
        <Body className='font-bold group flex gap-4 items-center'>
          Click Here
          <ArrowRightIcon className='h-4 group-hover:translate-x-2 transition-all' />
        </Body>
      </Link>
    </SectionLayout>
  );
};

export default BlogRedirect;
