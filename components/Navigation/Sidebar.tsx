import Link from 'next/link';
// import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
  return (
    <div className='drawer-side'>
      <label htmlFor='navbar-drawer' className='drawer-overlay'></label>

      <div className='menu bg-base-100 w-1/2 flex flex-col py-4'>
        {/* Dark Mode Toggle */}
        <div className='my-4 px-4 flex justify-end w-full'>
          {/* <ThemeToggle /> */}
        </div>

        <ol className='p-0'>
          <li>
            <Link href='/' aria-label='Navigate to home'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/blog' aria-label='Navigate to blogs'>
              Blogs
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;
