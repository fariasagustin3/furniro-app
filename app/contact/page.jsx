import React from 'react';
import Navbar from '../ui/navbar/Navbar';
import Banner from '../ui/banner/Banner';
import Benefits from '../ui/benefits/Benefits';
import Footer from '../ui/footer/Footer';

const ContactPage = () => {
  return (
    <div className=''>
      <Navbar />
      <Banner title="Contact" />

      <div className='flex flex-col items-center h-full gap-3 my-10'>
        <h1 className='text-2xl font-semibold text-center m-0'>Get In Touch With Us</h1>
        <p className='text-xs font-normal text-[#9F9F9F] w-1/2 text-center'>
          For More Information About Our Product & Services.
          Please Feel Free To Drop Us An Email. Our Staff Always
          Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className='flex flex-row items-start justify-center gap-5 px-60'>
        {/* left side */}
        <div className='flex flex-col items-start justify-start flex-1 gap-10 my-5'>
          <div className='flex flex-col gap-2 w-48'>
            <div className='flex flex-row items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <span className='text-lg text-black font-semibold'>Address</span>
            </div>
            <p className='text-xs pl-8'>236 5th SE Avenue, New York NY10000, United States</p>
          </div>

          <div className='flex flex-col gap-2 w-48'>
            <div className='flex flex-row items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <span className='text-lg text-black font-semibold'>Phone</span>
            </div>
            <p className='text-xs pl-8'>Mobile: +(84) 546-6789</p>
            <p className='text-xs pl-8'>Hotline: +(84) 456-6789</p>
          </div>

          <div className='flex flex-col gap-2 w-48'>
            <div className='flex flex-row items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
              </svg>
              <span className='text-lg text-black font-semibold'>Working Time</span>
            </div>
            <p className='text-xs pl-8'>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>

        {/* right side */}
        <div className='flex flex-col items-start justify-start flex-1 my-5 gap-5'>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Your Name</label>
            <input type="text" placeholder='Abc' className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Email Address</label>
            <input type="email" placeholder='abc@mail.com' className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Subject</label>
            <input type="text" placeholder='this is an optional' className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Message</label>
            <textarea type="text" placeholder="Hi! I'd like to ask about..." rows={7} className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <button className='w-max py-3 px-16 bg-[#B88E2F] text-white text-xs font-light rounded-lg'>Submit</button>
        </div>
      </div>

      <Benefits />
      <Footer />
    </div>
  );
}

export default ContactPage;
