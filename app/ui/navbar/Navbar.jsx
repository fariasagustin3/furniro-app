"use client"
import Image from 'next/image';
import Logo from '../../../assets/navbar/logo.png';
import Link from 'next/link';
import Cart from '../modal/Cart';
import { useState } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './navbar.css'
import TestImage from '@/assets/cart_modal/test_image.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )

  const handleOpen = () => {
    open === true ? setOpen(false) : setOpen(true);
  }

  return (
    <div className='flex flex-row items-center justify-between py-5 px-16'>
      <div>
        <Link href="/">
          <Image src={Logo} alt="logo" className='w-40' />
        </Link>
      </div>

      <ul className='flex flex-row items-center font-medium gap-16'>
        <Link href="/">
          <li className='cursor-pointer'>Home</li>
        </Link>
        <Link href="/shop">
          <li className='cursor-pointer'>Shop</li>
        </Link>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>

      <ul className='flex flex-row items-center font-medium gap-10'>
        <li className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </li>
        <li className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </li>
        <li className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </li>
        <button onClick={() => setOpen(true)}>
          <li className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </li>
        </button>
      </ul>

      {/* modal cart */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeIcon={closeIcon}
        classNames={{
          modal: 'customModal'
        }}
      >
        <div className='flex flex-col justify-between h-full'>
          <div>

            <h2 className='text-2xl font-semibold mb-5'>Shopping Cart</h2>
            <hr />
            <div className='flex flex-row items-center justify-between px-3'>
              <div className='flex flex-row items-center gap-5 leading-7'>
                <div className='w-[80px] h-[80px] rounded-lg bg-[#F9F1E7] mt-5 px-2 py-2'>
                  <Image src={TestImage} alt="product_image" className='w-full h-full' />
                </div>
                <div>
                  <p>Asgaard sofa</p>
                  <span className='text-black text-xs'>1 x <span className='text-sm font-semibold text-[#B88E2F]'>Rs. 250,000.00</span></span>
                </div>
              </div>
              <div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9F9F9F" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <div className='flex flex-row items-center justify-between px-3'>
              <div className='flex flex-row items-center gap-5 leading-7'>
                <div className='w-[80px] h-[80px] rounded-lg bg-[#F9F1E7] mt-5 px-2 py-2'>
                  <Image src={TestImage} alt="product_image" className='w-full h-full' />
                </div>
                <div>
                  <p>Asgaard sofa</p>
                  <span className='text-black text-xs'>1 x <span className='text-sm font-semibold text-[#B88E2F]'>Rs. 250,000.00</span></span>
                </div>
              </div>
              <div>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9F9F9F" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className='flex flex-col px-3 my-5'>
            <div className='flex flex-row items-center justify-between mb-5'>
              <p className='text-black font-semibold'>Subtotal</p>
              <p className='text-[#B88E2F] font-medium'>Rs. 250,000.00</p>
            </div>
            <hr />
            <div className='flex flex-row items-center justify-start gap-4 mt-5'>
              <Link href="/cart">
                <button className='flex items-center justify-center px-8 py-2 border-[1px] border-black rounded-full'>Cart</button>
              </Link>
              <Link href="/checkout">
                <button className='flex items-center justify-center px-8 py-2 border-[1px] border-black rounded-full'>Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
