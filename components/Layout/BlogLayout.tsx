import React from 'react';
import { Body, Heading } from '../Common/Text';

type BlogLayoutProps = {
  title: string;
  date: string;
};

const BlogLayout = ({
  children,
  title,
  date,
}: React.PropsWithChildren<BlogLayoutProps>) => {
  return (
    <div className='mx-auto px-8 lg:w-1/2'>
      <div className='flex flex-col gap-4'>
        <Heading className='font-bold'>{title}</Heading>
        <Body>{date}</Body>
      </div>
      <div className='mt-8 flex flex-col gap-4'>{children}</div>
    </div>
  );
};

export default BlogLayout;
