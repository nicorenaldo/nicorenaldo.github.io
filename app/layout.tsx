import Navbar from '@/components/Navigation/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/Common/FloatingButton';
import { ArrowUpIcon } from '@/components/Common/Icon';
import Sidebar from '@/components/Navigation/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nico Renaldo',
  description:
    'Welcome to the personal website of Nico Renaldo, showcasing my portfolio and expertise in software and engineering.',
  keywords:
    'Nico Renaldo, personal website, portfolio, software engineer, universitas gadjah mada, UGM',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='relative drawer drawer-end min-h-screen h-full prose max-w-none scroll-smooth'>
          <input id='navbar-drawer' type='checkbox' className='drawer-toggle' />

          <div className='relative drawer-content'>
            <Navbar />
            {children}
            <Footer />
          </div>

          {/* <FloatingButton>
            <button
              onClick={handleUp}
              className='btn btn-circle btn-primary transition-all shadow-xl hover:shadow-2xl p-4'
            >
              <ArrowUpIcon className='text-white outline-white' />
            </button>
          </FloatingButton> */}

          <Sidebar />
        </div>
      </body>
    </html>
  );
}
