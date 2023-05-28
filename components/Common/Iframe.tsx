type IframeProps = {
  src: string;
};

const Iframe = ({ src }: IframeProps) => {
  return (
    <div className=''>
      <iframe
        className='w-full h-auto aspect-video'
        src={src}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Iframe;
