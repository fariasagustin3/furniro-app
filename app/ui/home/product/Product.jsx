import Image from 'next/image';
import React from 'react';
import ImageExample from '../../../../assets/home/product_image_example.png'

const Product = () => {
  return (
    <div className='flex flex-col items-start bg-[#F4F5F7] cursor-pointer transform transition-transform duration-300 hover:scale-110'>
      <div className='max-w-[250px] max-h-[550px]'>
        <Image src={ImageExample} alt="product_image" className='w-full h-full' objectFit='contain' />
      </div>
      <div className='flex flex-col items-start gap-2 px-3 py-5'>
        <p className='text-lg text-[#3A3A3A] font-semibold'>Syltherine</p>
        <p className='text-xs text-[#898989] font-medium'>Stylish cafe chair</p>
        <p className='text-sm text-[#3A3A3A] font-semibold'>Rp 2.500.000</p>
      </div>
    </div>
  );
}

export default Product;
