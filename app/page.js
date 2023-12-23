import Image from 'next/image'
import Navbar from './ui/navbar/Navbar'
import HeaderBackground from '../assets/home/header_background.png';
import Category1 from '../assets/home/category1.png'
import Category2 from '../assets/home/category2.png'
import Category3 from '../assets/home/category3.png'
import Product from './ui/product/Product';
import Footer from './ui/footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* header section */}
      <div className='relative h-screen'>
        <Image
          src={HeaderBackground}
          alt="header_background"
          className='w-screen h-screen'
        />
        <div className='absolute right-20 bottom-0 top-0 m-auto max-w-[500px] max-h-[300px] bg-[#FFF3E3] py-10 px-12 rounded-lg'>
          <p className='font-bold -mb-4'>{"New Arrival"}</p>
          <h1 className='text-[#B88E2F] text-4xl font-bold pr-20 mb-2'>{"Discover Our New Collection"}</h1>
          <p className='text-[#333333] text-medium leading-6 text-sm mb-5'>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut elit tellus, luctus nec ullamcorper mattis.`}
          </p>
          <button className='px-12 py-5 bg-[#B88E2F] text-xs text-white font-bold'>{"BUY NOW"}</button>
        </div>
      </div>

      {/* categories */}
      <div className='h-full flex flex-col justify-center py-10'>
        <h1 className='text-center mb-3 text-2xl font-bold'>{"Browse The Range"}</h1>
        <p className='text-center font-normal text-sm'>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
        <div className='flex flex-row items-center justify-center gap-10 mt-10'>
          <div className='flex flex-col items-center gap-3 transform transition-transform duration-300 hover:scale-110'>
            <Image
              src={Category1}
              alt="category_1"
              className='w-80 cursor-pointer'
            />
            <span className='text-lg font-semibold text-[#333333]'>Dining</span>
          </div>
          <div className='flex flex-col items-center gap-3 transform transition-transform duration-300 hover:scale-110'>
            <Image
              src={Category2}
              alt="category_2"
              className='w-80 cursor-pointer'
            />
            <span className='text-lg font-semibold text-[#333333]'>Living</span>
          </div>
          <div className='flex flex-col items-center gap-3 transform transition-transform duration-300 hover:scale-110'>
            <Image
              src={Category3}
              alt="category_3"
              className='w-80 cursor-pointer'
            />
            <span className='text-lg font-semibold text-[#333333]'>Bedroom</span>
          </div>
        </div>
      </div>

      {/* products */}
      <div className='h-full flex flex-col px-20 py-10'>
        <h1 className='text-[#3A3A3A] text-3xl font-bold text-center py-5'>{"Our Products"}</h1>
        <div className='h-full flex flex-wrap gap-8 justify-center overflow-hidden'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <button className='flex self-center bg-transparent border-[1px] border-[#B88E2F] px-16 py-3 text-xs text-[#B88E2F] font-semibold my-5'>{"Show More"}</button>
      </div>

      <Footer />
    </main>
  )
}
