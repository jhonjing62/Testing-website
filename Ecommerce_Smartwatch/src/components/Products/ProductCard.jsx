import React from 'react'
import ProdatData from '../../Data/ProductData'
import {FaStar, FaRegStar} from 'react-icons/fa'

function ProductCard({ data}) {
  return (
    <div  className=' overflow-hidden rounded-lg group transition-all duration-400 relative flex flex-col shadow-lg
                      hover:scale-105 hover:-translate-y-2 hover:shadow-md hover:shadow-gray-400/30
    '>
        <div className=' aspect-square overflow-hidden '>
            <img src={data.imgs[0] || ""} 
            alt={data.name} 
            className='w-full h-full object-cover cursor-pointer 
            transition duration-300 
            group-hover:scale-105'/>
        </div>

        <div className='p-2 flex flex-col'>
          <p className='font-serif'>{data.category},{data.brand}</p>
          <p className='font-medium  flex items-center'>{data.price}$</p>
          <div className='flex items-center mt-1 gap-1'>
             {[...Array(5)].map((item, index)=>{
            return (
              <FaStar className={` text-md font-serif ${ data.rating>index ? "text-yellow-400 ":"text-gray-300"}`}/>
            );
          }
          )}
          </div>
        </div>
    </div>
  )
}

export default ProductCard