import BlogLayout from '@/components/Layout/BlogLayout';
import { DefaultKeyword } from '@/data/keyword';
import { Post, emptyPost, posts } from '@/data/post/post';
import { Metadata, ResolvingMetadata } from 'next';

interface PostParams {
  date: string;
  title: string;
  description: string;
  slug: string;
  thumbnail?: string;
}

const fetchPostData = (slug: string): Post => {
  let results = posts.filter((p) => p.slug === slug);
  return results.at(0) ?? emptyPost;
};

export async function generateMetadata(
  { params }: { params: PostParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = fetchPostData(params.slug);

  return {
    title: `${post.title} | Nico Renaldo`,
    description: post.description,
    keywords: `${post.keyword}, ${DefaultKeyword}`,
  };
}

export async function generateStaticParams() {
  return posts.map((p) => ({
    title: p.title,
    description: p.description,
    thumbnail: p.thumbnail,
    slug: p.slug,
    date: p.date,
  }));
}

export default function Post({ params }: { params: PostParams }) {
  const post = fetchPostData(params.slug);

  return (
    <BlogLayout title={post.title} date={post.date}>
      {post.content}
    </BlogLayout>
  );
}
