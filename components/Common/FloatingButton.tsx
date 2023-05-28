import { PropsWithChildren } from 'react';

const FloatingButton = ({ children }: PropsWithChildren) => {
  return <div className='fixed z-50 bottom-[3%] right-[3%]'>{children}</div>;
};

export default FloatingButton;
