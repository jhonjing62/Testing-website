import React from 'react'
import Herosection from '../components/Home/Herosection'
import ProductCard from '../components/Products/ProductCard'
import ProdatData from '../Data/ProductData'


function Homepage() {
  return (
    <div className='w-full m-auto relative mt-15'>
      <Herosection/>
      <div className='m-auto w-full mt-7 px-10'>
        <div className='grid gride-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6'>
          { ProdatData.map((watch)=>(
        <ProductCard key={watch.id} data={watch}/>
            ))}
        </div>
      </div>
      
    </div>
  )
}

export default Homepage