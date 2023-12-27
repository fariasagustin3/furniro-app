"use client"
import React, { useState } from 'react';
import Navbar from '../ui/navbar/Navbar';
import Banner from '../ui/banner/Banner';
import Benefits from '../ui/benefits/Benefits';
import Footer from '../ui/footer/Footer';

const CheckoutPage = () => {
  const [payment, setPayment] = useState("")
  return (
    <div>
      <Navbar />
      <Banner title="Checkout" />

      {/* content container */}
      <div className='flex flex-row items-start justify-center gap-5 px-20 py-20'>

        {/* billing details - left side */}
        <div className='flex-1 flex flex-col items-start gap-7'>
          <h2 className='text-2xl font-semibold text-black'>Billing details</h2>
          <div className='flex flex-row items-center justify-center gap-3 w-full'>
            <div className='flex flex-col justify-center gap-3 w-full flex-1'>
              <label className='text-sm font-semibold'>First Name</label>
              <input type="text" className='border-[1px] border-[#9F9F9F] rounded-lg py-5 w-full focus:outline-none px-5 text-xs' />
            </div>
            <div className='flex flex-col justify-center gap-3 w-full flex-1'>
              <label className='text-sm font-semibold'>Last Name</label>
              <input type="text" className='border-[1px] border-[#9F9F9F] rounded-lg py-5 w-full focus:outline-none px-5 text-xs' />
            </div>
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Company Name (optional)</label>
            <input type="text" className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Country/Region</label>
            <input type="text" className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Town/City</label>
            <input type="text" className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Province</label>
            <input type="text" className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>ZIP Code</label>
            <input type="text" className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Phone</label>
            <input type="number" className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Email address</label>
            <input type="email" className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <input type="text" className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' placeholder='Additional information' />
          </div>
        </div>

        {/* payment method - right side */}
        <div className='flex flex-col justify-start items-start flex-1 px-20'>
          <div className='flex flex-col items-start w-full gap-5 border-b-[1px] border-[#D9D9D9] pb-3'>
            <div className='flex flex-row items-start justify-between w-full'>
              <span className='text-black font-semibold'>Product</span>
              <span className='text-black font-semibold'>Subtotal</span>
            </div>
            <div className='flex flex-row items-start justify-between w-full'>
              <span className='text-[#9F9F9F] font-normal text-xs'>Asgaard sofa <span className='text-black ml-5'>x 1</span></span>
              <span className='text-black text-xs font-normal'>Rs. 250,000.00</span>
            </div>
            <div className='flex flex-row items-start justify-between w-full'>
              <span className='text-black font-normal text-xs'>Subtotal</span>
              <span className='text-black text-xs font-normal'>Rs. 250,000.00</span>
            </div>
            <div className='flex flex-row items-start justify-between w-full'>
              <span className='text-black font-normal text-xs'>Total</span>
              <span className='text-[#B88E2F] text-lg font-bold'>Rs. 250,000.00</span>
            </div>
          </div>

          <div className='flex flex-col pt-5 gap-5'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row items-center gap-5'>
                <input type="radio" name="payment" onClick={() => setPayment("bank")} />
                <label htmlFor="payment" className='text-xs'>Direct Bank Transfer</label>
              </div>
              {
                payment === "bank" && (
                  <p className='text-xs leading-5 pl-5'>
                    {`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora commodi placeat earum deleniti. Nemo est alias officia,
                    minima fuga sapiente neque autem aliquam vero consectetur
                    deserunt ea odio ullam repellendus.`}
                  </p>
                )
              }
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row items-center gap-5'>
                <input type="radio" name="payment" onClick={() => setPayment("cash")} />
                <label htmlFor="payment" className='text-xs'>Cash On Delivery</label>
              </div>
              {
                payment === "cash" && (
                  <p className='text-xs leading-5 pl-5'>
                    {`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora commodi placeat earum deleniti. Nemo est alias officia,
                    minima fuga sapiente neque autem aliquam vero consectetur
                    deserunt ea odio ullam repellendus.`}
                  </p>
                )
              }
            </div>
            <p className='text-xs font-medium'>
              Your personal data will be used to support your experience throughout this website, 
              to manage access to your account, and for other purposes described in our privacy policy.
            </p>
            <button className='text-center border-[1px] border-black block w-max px-12 py-4 self-center rounded-lg'>Place Order</button>
          </div>
        </div>
      </div>

      <Benefits />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
