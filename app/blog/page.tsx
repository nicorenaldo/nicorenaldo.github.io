import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Blog({}: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col px-8 xl:pl-24'>
      {/* <Banner /> */}
      <Link href='/'>Go to Home</Link>
      <Link href='/blogs/test'>Go to Test</Link>
      <div className='flex flex-col gap-16   xl:gap-24 md:mr-16 xl:mr-32'>
        <div>Blog</div>
      </div>
    </main>
  );
}
