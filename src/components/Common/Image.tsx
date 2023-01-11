import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Body } from './Text';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Image = ({ alt, src, className }: ImageProps) => {
  return <LazyLoadImage effect='blur' alt={alt} src={src} className={className} />;
};

type ImageCaptionProps = {
  src: string;
  alt: string;
  caption?: string;
};

export const ImageCaption = ({ alt, src, caption }: ImageCaptionProps) => {
  return (
    <div className='text-center my-4'>
      <LazyLoadImage effect="blur" alt={alt} src={src} />
      {caption && <Body className='italic mt-4'>{caption}</Body>}
    </div>
  );
};
