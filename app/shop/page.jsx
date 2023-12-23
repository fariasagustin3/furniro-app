import React from 'react';
import Navbar from '../ui/navbar/Navbar';
import Footer from '../ui/footer/Footer';
import Banner from '../ui/banner/Banner';
import Product from '../ui/home/product/Product';

const Shop = () => {
  return (
    <div className=''>
      <Navbar />
      <Banner title="Shop" />

      {/* filters */}
      <div className='flex flex-row items-center justify-between px-16 bg-[#F9F1E7] py-5'>
        <div className='flex flex-row items-center gap-5'>
          <ul className='flex flex-row items-center gap-5 border-r-[1px] border-r-[#9F9F9F] pr-4'>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>
            </li>
            <li className='text-sm font-normal'>Filter</li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
              </svg>
            </li>
          </ul>
          <ul className='flex flex-row items-center gap-3'>
            <li className='text-sm font-normal'>{"Showing 1-16 of 32 results"}</li>
          </ul>
        </div>

        <div className='flex flex-row items-center gap-5'>
          <p className='text-sm font-normal'>Show</p>
          <input type="number" className='w-20 px-3 py-2 bg-white focus:outline-none border-none' placeholder='16' />
          <p className='text-sm font-normal'>Sort By</p>
          <input type="text" className='w-36 px-3 py-2 bg-white focus:outline-none border-none' placeholder='Default' />
        </div>
      </div>

      <div className='h-full flex flex-wrap gap-8 justify-center overflow-hidden py-20'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      {/* pagination */}
      <div className='flex flex-row items-center justify-center gap-4 py-5'>
        <span className='bg-[#B88E2F] w-12 h-12 rounded-lg flex items-center justify-center text-sm font-normal text-white cursor-pointer'>1</span>
        <span className='bg-[#F9F1E7] w-12 h-12 rounded-lg flex items-center justify-center text-sm font-normal text-black cursor-pointer'>2</span>
        <span className='bg-[#F9F1E7] w-12 h-12 rounded-lg flex items-center justify-center text-sm font-normal text-black cursor-pointer'>3</span>
        <span className='bg-[#F9F1E7] w-12 h-12 rounded-lg flex items-center justify-center text-sm font-normal text-black cursor-pointer'>4</span>
      </div>

      <Footer />
    </div>
  );
}

export default Shop;
