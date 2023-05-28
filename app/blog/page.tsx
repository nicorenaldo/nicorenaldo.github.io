import { Body, Heading, SubHeading } from '../../components/Common/Text';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Post, posts } from '@/data/post/post';

export default function Blog() {
  return (
    <div className='flex flex-col px-8 xl:pl-24 md:mr-16 xl:mr-32'>
      <Heading>Blogs</Heading>
      <div className='flex flex-col gap-4 lg:gap-12 divide-y'>
        {posts.map((e) => {
          return <BlogCard key={e.title} post={e} />;
        })}
      </div>
    </div>
  );
}

type BlogCardProps = {
  post: Post;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className='flex flex-col-reverse lg:flex-row pt-4 lg:pt-12 justify-between lg:gap-12'>
      <div>
        <Body>{post.date}</Body>
        <Link
          href={'/blog/' + post.slug}
          aria-label={`Navigate to post ${post.title}`}
        >
          <SubHeading className='mt-4'>{post.title}</SubHeading>
        </Link>
        <Body>{post.description}</Body>
      </div>

      <div className='w-full lg:w-64 h-auto lg:aspect-video lg:flex-shrink-0'>
        {post.thumbnail && (
          <Image src={post.thumbnail} alt='thumbnail' className='rounded-lg' />
        )}
      </div>
    </div>
  );
};
