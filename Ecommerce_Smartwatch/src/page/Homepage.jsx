import React from 'react'
import Herosection from '../components/Home/Herosection'
import ProductCard from '../components/Products/ProductCard'
import ProductData from '../Data/ProductData'
import Cartpage from './Cartpage';
import { useNavigate, useParams } from 'react-router-dom';


function Homepage({data}) {
  const navigate = useNavigate();
   const bestSeller = ProductData.filter((item)=>item.bestseller === true).slice(0, 5);
   const favourite = ProductData.filter((item)=>item.flashsale === true).slice(0, 5);
  return (
    <div className='w-full m-auto relative mt-15'>
      <Herosection/>
      <div className='m-auto w-full mt-7 px-10'>
           <div className='relative group '>
              <div className='flex items-center justify-between px-1'>
                  <h1 className='font-bold font-serif py-1 text-3xl uppercase'>shop by category</h1>
                  <p className='text-lg font-serif font-bold active:scale-95'>View All →</p>
              </div>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>{
                  favourite.map((watch)=>( 
                    <div key={watch.id} className='shadow-lg h-90 w-65 shadow-slate-500 my-3 relative rounded-lg
                        duration-300 transition-all hover:scale-105 hover:shadow-xs hover:shadow-slate-700
                    '>
                      <img onClick={()=>navigate(`/products/${watch.id}`)}  src={watch.imgs[0] || ""} alt="watch.name" className='rounded-lg overflow-hidden object-cover w-full h-full' />    
                    </div> 
                  ))} 
                </div>    
            </div>   

            <h1 className='font-bold font-serif py-1 text-3xl uppercase'>Best Sellers</h1>
            <div   className='grid gride-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6'>
              { bestSeller.map((item)=>(
                 <ProductCard key={item.id} data={item}/>
                ))}
            </div>
       </div>
      
      
    </div>
  )
}

export default Homepage