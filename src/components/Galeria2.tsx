// Gallery.tsx

import GalleryImage from './gallery-image.tsx';

type GalleryProps = {
  images: { src: string; caption: string; }[];
  title: string;
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="max-w-5xl mx-auto mt-8 pb-10 text-center bg-gradient-to-r from-purple-50 to-indigo-200 rounded-xl">
      <h4 className='text-3xl w-full bg-gradient-to-l from-indigo-50 to-purple-200 py-4 rounded-t-xl'>Image Gallery</h4>
      <div className="mt-8 flex flex-1 flex-wrap justify-center items-center gap-6 justify-items-center">
        {images.map((image, index) => (
          <GalleryImage key={index} title={image.caption} src={image.src}/>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
