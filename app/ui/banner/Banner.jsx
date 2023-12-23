import Image from 'next/image';
import BannerImage from '../../../assets/banner/banner_image.png';

const Banner = ({ title }) => {
  return (
    <div className='relative flex justify-center items-center'>
      <Image src={BannerImage} alt="banner_image" className='w-full h-full' />
      <h1 className='text-4xl font-medium absolute'>{title}</h1>
    </div>
  );
}

export default Banner;
