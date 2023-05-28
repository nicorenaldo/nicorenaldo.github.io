import { Body } from './Text';

type ImageCaptionProps = {
  img: React.ReactNode;
  className: string;
  caption?: string;
};

export const ImageCaption = ({
  className,
  img,
  caption,
}: ImageCaptionProps) => {
  return (
    <div className={`${className} text-center my-4`}>
      {img}
      {caption && <Body className='italic mt-4'>{caption}</Body>}
    </div>
  );
};
