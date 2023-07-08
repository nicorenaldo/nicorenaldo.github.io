import Footer from '@/components/Footer';
import Navbar from '@/components/Navigation/Navbar';
import Sidebar from '@/components/Navigation/Sidebar';
import { DefaultKeyword } from '@/data/keyword';
import CustomProvider from '@/redux/provider';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nico Renaldo | Software Engineer',
  description:
    'Welcome to the personal website of Nico Renaldo. An experienced software engineer with a diverse background in Linux, Golang, Python, Operations, web development, machine learning, and embedded programming. Discover my portfolio and how I work towards building and maintaining robust systems.',
  keywords: DefaultKeyword,
  viewport: 'width=device-width, initial-scale=1',
  authors: { name: 'Nico Renaldo' },
  creator: 'Nico Renaldo',
  openGraph: {
    title: 'Nico Renaldo | Software Engineer',
    description:
      'Nico Renaldo, an experienced software engineer with a diverse background in Linux, Golang, Python, Operations, web development, machine learning, and embedded programming. Explore his portfolio and learn how he builds and maintains robust systems.',
    url: 'https://www.linkedin.com/in/nicorenaldo',
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CustomProvider>
          <div className='relative drawer drawer-end min-h-screen h-full prose max-w-none scroll-smooth'>
            <input
              id='navbar-drawer'
              type='checkbox'
              className='drawer-toggle'
            />

            <div className='relative drawer-content'>
              <Navbar />
              {children}
              <Footer />
            </div>

            <Sidebar />
          </div>
        </CustomProvider>
      </body>
    </html>
  );
}

export default RootLayout;
