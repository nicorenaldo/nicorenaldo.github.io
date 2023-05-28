import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Page({}: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col px-8 xl:pl-24'>
      {/* <Banner /> */}
      <div className='flex flex-col gap-16   xl:gap-24 md:mr-16 xl:mr-32'>
        <div>Test Page</div>
      </div>
    </main>
  );
}
