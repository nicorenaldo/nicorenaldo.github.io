import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

type CarouselProps = {
    images: string[]
    cover?: boolean
}

const Carousel = ({ images, cover }: CarouselProps) => {
    const [index, setIndex] = useState(0)

    const handleClickLeft = () => {
        if (index === 0) {
            setIndex(images.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const handleClickRight = () => {
        if (index === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return <div className='relative w-full aspect-video mb-4 overflow-hidden'>
        <div className={`flex absolute overflow-visible transition-all -translate-x-[100%] duration-300`} style={
            { transform: `translate(-${100 * index}%,0)` }
        }>
            {images.map((img) => <img src={img} alt="img" className={`aspect-video ${cover ? 'object-cover object-top' : 'object-contain'}`} />)}
        </div>
        <div className='flex items-center justify-between w-full h-full px-2 absolute'>
            <button onClick={handleClickLeft} type="button" className='rounded-full bg-neutral-600 bg-opacity-20'>
                <KeyboardArrowLeftIcon />
            </button>
            <button onClick={handleClickRight} type="button" className='rounded-full bg-neutral-600 bg-opacity-20'>
                <KeyboardArrowRightIcon />
            </button>
        </div>
    </div>
}

export default Carousel