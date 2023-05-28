import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';
import { useState } from 'react';

type CarouselProps = {
  images: string[];
  cover?: boolean;
};

const Carousel = ({ images, cover }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const handleClickLeft = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleClickRight = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className='relative w-full aspect-video mb-4'>
      <div className='overflow-x-scroll md:overflow-x-hidden w-full h-full'>
        <div
          className={'flex transition-all -translate-x-[100%] duration-300'}
          style={{ transform: `translate(-${100 * index}%,0)` }}
        >
          {images.map((img, index) => (
            <div key={index} className='w-full h-full flex-shrink-0'>
              <Image
                src={img}
                alt='img'
                className={`flex-shrink-0 aspect-video ${
                  cover ? 'object-cover object-top' : 'object-contain'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='hidden group md:block overflow-visible'>
        <div className='absolute z-10 left-0 top-0 bottom-0 flex'>
          <button
            onClick={handleClickLeft}
            type='button'
            className='my-auto transition-all duration-300 group-hover:custom-shadow group-hover:bg-white group-hover:-translate-x-4 rounded-full p-2 m-1'
          >
            <KeyboardArrowLeftIcon />
          </button>
        </div>

        <div className='absolute z-10 right-0 top-0 bottom-0 flex'>
          <button
            onClick={handleClickRight}
            type='button'
            className='my-auto transition-all duration-300 group-hover:custom-shadow group-hover:bg-white group-hover:translate-x-4 rounded-full p-2 m-1'
          >
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
