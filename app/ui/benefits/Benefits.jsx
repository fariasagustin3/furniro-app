import Image from 'next/image';
import React from 'react';
import Trophy from '@/assets/benefits/trophy.png'
import Guarantee from '@/assets/benefits/guarantee.png'
import Shipping from '@/assets/benefits/shipping.png'
import CustomerSupport from '@/assets/benefits/customer_support.png'

const Benefits = () => {
  return (
    <div className='h-full flex flex-row items-center justify-center gap-5 px-7 py-20 bg-[#FAF3EA] mt-16'>
      <div className='flex flex-row items-center justify-center gap-1 flex-1'>
        <Image src={Trophy} alt="trophy" className='w-10' />
        <div>
          <p className='text-[#242424] text-xl font-semibold'>{"High Quality"}</p>
          <span className='text-[#898989] text-sm font-medium'>{"crafted from top materials"}</span>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center gap-1 flex-1'>
        <Image src={Guarantee} alt="trophy" className='w-10' />
        <div>
          <p className='text-[#242424] text-xl font-semibold'>{"Warranty Protection"}</p>
          <span className='text-[#898989] text-sm font-medium'>{"Over 2 years"}</span>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center gap-1 flex-1'>
        <Image src={Shipping} alt="trophy" className='w-10' />
        <div>
          <p className='text-[#242424] text-xl font-semibold'>{"Free Shipping"}</p>
          <span className='text-[#898989] text-sm font-medium'>{"Order over 150 $"}</span>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center gap-1 flex-1'>
        <Image src={CustomerSupport} alt="trophy" className='w-10' />
        <div>
          <p className='text-[#242424] text-xl font-semibold'>{"24 / 7 Support"}</p>
          <span className='text-[#898989] text-sm font-medium'>{"Dedicated support"}</span>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
