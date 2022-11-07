import { Outlet } from 'react-router-dom';

const GenericLayout = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Outlet />
    </div>
  );
};

export default GenericLayout;
