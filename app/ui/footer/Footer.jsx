import React from 'react';

const Footer = () => {
  return (
    <footer className='h-full flex flex-row items-start justify-between px-20 py-20'>
      <div className='flex flex-col gap-10'>
        <h1 className='text-2xl font-bold cursor-default'>Furniro.</h1>
        <div className='flex flex-col gap-1 text-[#9F9F9F] text-xs'>
          <p className='overflow-hidden cursor-default'>400 University Drive Suite 200 Coral Gables,</p>
          <p className='overflow-hidden cursor-default'>FL 33134 USA</p>
        </div>
      </div>

      <ul className='flex flex-col items-start gap-10 font-semibold'>
        <li className='overflow-hidden text-[#9F9F9F] cursor-default'>Links</li>
        <li className='overflow-hidden cursor-pointer'>Home</li>
        <li className='overflow-hidden cursor-pointer'>Shop</li>
        <li className='overflow-hidden cursor-pointer'>About</li>
        <li className='overflow-hidden cursor-pointer'>Contact</li>
      </ul>

      <ul className='flex flex-col items-start gap-10 font-semibold'>
        <li className='overflow-hidden text-[#9F9F9F] cursor-default'>Help</li>
        <li className='overflow-hidden cursor-pointer'>Payment Options</li>
        <li className='overflow-hidden cursor-pointer'>Returns</li>
        <li className='overflow-hidden cursor-pointer'>Privacy Policies</li>
      </ul>

      <div className='flex flex-col items-start gap-10 font-semibold'>
        <p className='overflow-hidden text-[#9F9F9F] cursor-default'>Newsletter</p>
        <div className='flex flex-row gap-3 items-center'>
          <input type="email" placeholder='Enter Your Email Address' className='text-xs font-normal border-b-[1px] border-b-black pr-4 focus:outline-none' />
          <button className='border-b-[1px] border-b-black text-xs font-semibold'>SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
