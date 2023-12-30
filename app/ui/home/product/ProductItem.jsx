import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Product = ({ title, price, stock, img, id }) => {
  return (
    <div className='flex flex-col items-start bg-[#F4F5F7] cursor-pointer transform transition-transform duration-300 hover:scale-110'>
      <Link href={`/shop/${id}`}>
        <div className='max-w-[250px] max-h-[550px]'>
          <Image src={img || '/noproduct.jpg'} width={250} height={550} alt="product_image" className='w-full h-full' objectFit='contain' />
        </div>
        <div className='flex flex-col items-start gap-2 px-3 py-5'>
          <p className='text-lg text-[#3A3A3A] font-semibold'>{title}</p>
          <p className='text-xs text-[#898989] font-medium'>{stock}</p>
          <p className='text-sm text-[#3A3A3A] font-semibold'>${price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
