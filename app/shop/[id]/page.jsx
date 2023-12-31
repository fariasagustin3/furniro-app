import Footer from '@/app/ui/footer/Footer';
import Navbar from '@/app/ui/navbar/Navbar';
import Image from 'next/image';
import Product from '@/app/models/Product';
import { connectMongoDB } from '@/app/lib/dbConnection';

async function getProductById(id) {
  try {
    connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return product;
  } catch (error) {
    return {
      error: "Something went wrong"
    }
  }
}

const SingleProductPage = async ({params}) => {
  // const [quantity, setQuantity] = useState(1);
  const {id} = params;
  const product = await getProductById(id)

  return (
    <div>
      <Navbar />

      {/* route */}
      <div className='flex flex-row items-center justify-start px-32 py-7 bg-[#F9F1E7] gap-10'>
        <span className='text-sm text-[#9F9F9F] font-normal'>Home</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <span className='text-sm text-[#9F9F9F] font-normal'>Shop</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 pr-4 border-r-[1px] border-r-[#9F9F9F]">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <span className='text-sm text-black font-normal'>{product.title}</span>
      </div>

      {/* page content */}
      <div>
        <div className='flex flex-row items-start justify-center gap-10 px-20 py-10'>
          {/* pictures */}
          <div className='flex flex-row items-start gap-8 flex-1'>
            {/* small pictures */}
            <div className='flex flex-col justify-center items-start gap-5'>
              {/* single picture */}
              <div className='max-w-[70px] max-h-[80px] rounded-lg cursor-pointer'>
                <Image src={product.img || '/noproduct.jpg'} width={70} height={80} alt="picture_one" className='w-full h-full' />
              </div>
              <div className='max-w-[70px] max-h-[80px] rounded-lg cursor-pointer'>
                <Image src={product.img || '/noproduct.jpg'} width={70} height={80} alt="picture_one" className='w-full h-full' />
              </div>
              <div className='max-w-[70px] max-h-[80px] rounded-lg cursor-pointer'>
                <Image src={product.img || '/noproduct.jpg'} width={70} height={80} alt="picture_one" className='w-full h-full' />
              </div>
              <div className='max-w-[70px] max-h-[80px] rounded-lg cursor-pointer'>
                <Image src={product.img || '/noproduct.jpg'} width={70} height={80} alt="picture_one" className='w-full h-full' />
              </div>
            </div>
            {/* big picture */}
            <div className='max-w-[430px] max-h-[430px] rounded-lg cursor-pointer'>
              <Image src={product.img || '/noproduct.jpg'} width={430} height={430} alt="big_pic" className='w-full h-full' />
            </div>
          </div>

          {/* product data */}
          <div className='flex flex-col justify-start items-start gap-4 flex-1'>

            {/* title & description */}
            <div>
              <h1 className='font-normal'>{product.title}</h1>
              <p className='text-xl pb-5 text-[#9F9F9F] font-medium'>${product.price}</p>
              <p className='leading-5 text-sm w-4/5'>
                {product.stock} units
              </p>
            </div>

            {/* color & size */}
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#9F9F9F] text-sm'>Size</h3>
              <div className='flex flex-row items-center gap-3'>
                {product.sizes.map((size, index) => (
                  <button key={index} className='flex items-center justify-center w-8 h-8 text-xs font-medium py-2 px-2 rounded-lg bg-[#B88E2F] text-white'>{size}</button>
                ))}
                
              </div>
              <h3 className='text-[#9F9F9F] text-sm'>Color</h3>
              <div className='flex flex-row items-center gap-3'>
                {product.colors.map((color, index) => (
                  <div key={index} className={`w-8 h-8 bg-[#${color}] rounded-full`} />
                ))}
              </div>

              <div className='flex flex-row items-center gap-5'>
                {/* <div className='flex flex-row items-center justify-center gap-6 py-3 border-[1px] border-[#9F9F9F] rounded-lg w-32'>
                  <button onClick={() => setQuantity(quantity - 1)} disabled={quantity < 2}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  </button>
                  <p className='text-sm font-medium'>{quantity}</p>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div> */}
                <button className='border-[1px] border-black rounded-lg w-32 text-sm font-medium py-3'>Add To Cart</button>
              </div>
              <hr className='w-96 my-10' />
              {/* additional information */}
              <div className='flex flex-col items-start justify-center gap-3'>
                <div className='flex flex-row items-center gap-2'>
                  <span className='text-[#9F9F9F]'>SKU:</span>
                  <span className='text-[#9F9F9F]'>{product.SKU}</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <span className='text-[#9F9F9F]'>Category:</span>
                  <span className='text-[#9F9F9F]'>{product.category}</span>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className='my-20 px-40 flex flex-col gap-5'>
          <h3 className='text-lg font-semibold text-black text-center'>Description</h3>
          <p className='text-sm text-[#9F9F9F] text-left'>{product.description}</p>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default SingleProductPage;
