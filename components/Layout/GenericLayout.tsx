import FloatingButton from '../Common/FloatingButton';
import { ArrowUpIcon } from '../Common/Icon';
import Footer from '../Footer';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../Navigation/Sidebar';

const GenericLayout = () => {
  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='relative drawer drawer-end min-h-screen h-full prose max-w-none scroll-smooth'>
      <input id='navbar-drawer' type='checkbox' className='drawer-toggle' />

      <div className='relative drawer-content'>
        <Navbar />
        <Footer />
      </div>

      <FloatingButton>
        <button
          onClick={handleUp}
          className='btn btn-circle btn-primary transition-all shadow-xl hover:shadow-2xl p-4'
        >
          <ArrowUpIcon className='text-white outline-white' />
        </button>
      </FloatingButton>

      <Sidebar />
    </div>
  );
};

export default GenericLayout;
