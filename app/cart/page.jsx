import React from 'react';
import Navbar from '../ui/navbar/Navbar';
import Benefits from '../ui/benefits/Benefits';
import Footer from '../ui/footer/Footer';
import Banner from '../ui/banner/Banner';
import Image from 'next/image';
import TestImage from '@/assets/cart_modal/test_image.png'
import Link from 'next/link';

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <Banner title="Cart" />

      <div className='px-20 flex flex-row gap-10 mt-16'>

        {/* table left side */}
        
        <table className='h-full'>
          <thead>
            <tr className='bg-[#F9F1E7]'>
              <th className='py-5'>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th className='pr-10'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='flex flex-row items-center gap-3 my-3 px-10'>
                <div className='w-[80px] h-[80px] bg-[#F9F1E7] px-2 py-2 rounded-lg'>
                  <Image src={TestImage} alt="product_image" className='w-full h-full' />
                </div>
                <span className='text-xs text-[#9F9F9F]'>Asgaard sofa</span>
              </td>
              <td className='text-xs text-[#9F9F9F] px-10 self-start'>Rs. 250,000.00</td>
              <td className='text-xs text-black px-10'>1</td>
              <td className='text-xs text-black font-medium px-10'>Rs. 250,000.00</td>
              <td className='px-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B88E2F" className="w-6 h-6 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className='flex flex-row items-center gap-3 my-3 px-10'>
                <div className='w-[80px] h-[80px] bg-[#F9F1E7] px-2 py-2 rounded-lg'>
                  <Image src={TestImage} alt="product_image" className='w-full h-full' />
                </div>
                <span className='text-xs text-[#9F9F9F]'>Asgaard sofa</span>
              </td>
              <td className='text-xs text-[#9F9F9F] px-10 self-start'>Rs. 250,000.00</td>
              <td className='text-xs text-black px-10'>1</td>
              <td className='text-xs text-black font-medium px-10'>Rs. 250,000.00</td>
              <td className='px-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B88E2F" className="w-6 h-6 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>

        {/* right side */}
        <div className='h-full flex flex-col px-10 py-10 bg-[#F9F1E7] w-72'>
          <h1 className='text-2xl font-semibold text-center mb-12'>Cart Totals</h1>
          <div className='flex flex-row items-center justify-between mb-6'>
            <span className='text-black text-xs font-medium'>Subtotal</span>
            <span className='text-[#9F9F9F] text-xs font-medium'>Rs. 250,000.00</span>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <span className='text-black text-xs font-medium'>Total</span>
            <span className='text-[#B88E2F] text-sm font-semibold'>Rs. 250,000.00</span>
          </div>
          <Link href="/checkout">
            <button className='flex flex-row items-center justify-center px-5 py-3 border-[1px] border-black mt-10 text-xs font-medium self-center w-full'>Checkout</button>
          </Link>
        </div>
      </div>

      <Benefits />
      <Footer />
    </div>
  );
}

export default CartPage;
