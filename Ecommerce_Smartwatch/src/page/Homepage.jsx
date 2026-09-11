import React from 'react'
import Herosection from '../components/Home/Herosection'
import ProductCard from '../components/Products/ProductCard'
import ProductData from '../Data/ProductData'


function Homepage() {
   const bestSeller = ProductData.filter((item)=>item.bestseller === true).slice(0, 5);
  return (
    <div className='w-full m-auto relative mt-15'>
      <Herosection/>
      <div className='m-auto w-full mt-7 px-10'>
      
        <h1 className='font-bold font-serif py-1 text-3xl uppercase'>Best Sellers</h1>
        <div className='grid gride-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6'>
          { bestSeller.map((watch)=>(
        <ProductCard key={watch.id} data={watch}/>
            ))}
        </div>
      </div>
      
    </div>
  )
}

export default Homepage