
type Props = {
  title: string;
  src: string;
};

const GalleryImage = ({ title, src }: Props) => {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`shadow-sm w-full object-cover hover:shadow-lg transition-shadow duration-200`}>
        <img
          src={src}
          alt={title}
          width={300}
          height={300}
          className='rounded-lg'
        />
        <p className='mt-2 max-w-[295px] text-start text-ellipsis text-gray-700 text-sm italic'>{title}</p>
      </div>
    </div>
  );
};

export default GalleryImage;
