import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../components/Common/Image';
import { Body, Heading, SubHeading } from '../../components/Common/Text';

type Post = {
  date: string;
  title: string;
  description: string;
  slug: string;
  thumbnail?: string;
};

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Blogs | Nico Renaldo';
    return () => {
      document.title = 'Nico Renaldo';
    };
  }, []);

  const data: Post[] = [
    {
      date: '10 June 2021',
      title: 'Jagawana — Machine Learning In Depth',
      description:
        'Jagawana is a Wide Sensor Network System deployed in the forests to prevent Ilegal Logging. By using sensors to pick up voices in the forests, we could monitor what happened in the forest in real-time.',
      slug: 'jagawana-machine-learning',
      thumbnail: 'https://imgur.com/kPlY4p6.png',
    },
    {
      date: '05 June 2021',
      title: 'Jagawana — Internet of Things in Depth',
      description:
        'Jagawana is a Wide Sensor Network System deployed in the forests to prevent Ilegal Logging. By using sensors to pick up voices in the forests, we could monitor what happened in the forest in real-time.',
      slug: 'jagawana-iot',
    },
    {
      date: '16 May 2021',
      title: 'Detecting Chainsaws in Forest with Machine Learning — Jagawana',
      description:
        'Jagawana is a Wide Sensor Network System deployed in the forests to prevent Ilegal Logging. By using sensors to pick up voices in the forests, we could monitor what happened in the forest in real-time.',
      slug: 'jagawana-overview',
    },
    {
      date: '04 March 2021',
      title: 'Headless Raspberry Pi 3 B+ SSH & WiFi Setup',
      description:
        'This article covers setting up the Raspberry Pi 3 Model B+ for headless SSH access over WiFi using Windows 10.',
      slug: 'headless-raspi',
      thumbnail: 'https://imgur.com/HlqDlPS.jpg',
    },
    {
      date: '11 February 2021',
      title: 'Securing Raspberry Pi Connection with OpenVPN',
      description:
        'The connection on your IoT project using Raspi may not be as secure as you think, amateur hackers can see everything you do online with simple tools like Packet Sniffers.',
      slug: 'securing-raspi',
      thumbnail: 'https://imgur.com/05alk7G.jpg',
    },
  ];

  return (
    <div className='flex flex-col px-8 xl:pl-24 md:mr-16 xl:mr-32'>
      <Heading>Blogs</Heading>
      <div className='flex flex-col gap-4 lg:gap-12 divide-y'>
        {data.map((e) => {
          return <BlogCard key={e.title} post={e} />;
        })}
      </div>
    </div>
  );
};

type BlogCardProps = {
  post: Post;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className='flex flex-col-reverse lg:flex-row pt-4 lg:pt-12 justify-between lg:gap-12'>
      <div>
        <Body>{post.date}</Body>
        <Link to={'/blogs/' + post.slug} aria-label={`Navigate to post ${post.title}`}>
          <SubHeading className='mt-4'>{post.title}</SubHeading>
        </Link>
        <Body>{post.description}</Body>
      </div>

      <div className='w-full lg:w-64 h-auto lg:aspect-video lg:flex-shrink-0'>
        {post.thumbnail && (
          <Image
            src={post.thumbnail}
            alt='thumbnail'
            className='w-full h-full rounded aspect-video object-contain'
          />
        )}
      </div>
    </div>
  );
};

export default BlogPage;
