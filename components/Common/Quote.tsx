import { PropsWithChildren } from 'react';
import { Body } from './Text';

const Quote = ({ children }: PropsWithChildren) => {
  return (
    <Body className='italic shadow-[inset_3px_0_0_0_#444452] -ml-4 pl-4'>
      {children}
    </Body>
  );
};
export default Quote;
