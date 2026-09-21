
import React from 'react'
import ProductData from '../../Data/ProductData'
import {FaStar, FaRegStar} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function ProductCard({ data}) {
  const navigate = useNavigate();
  const headleProductDetail =(id)=>{
    navigate(`/products/${data.id}`);
  }

  return (
    <div  className=' overflow-hidden my-4 rounded-lg group transition-all duration-400 relative flex flex-col shadow-xl shadow-gray-400
                      hover:scale-105 hover:-translate-y-2 hover:shadow-sm hover:shadow-gray-500
    '>
        <div  className=' aspect-square overflow-hidden relative '>
            <img  onClick={()=>navigate(`/products/${data.id}`)} src={data.imgs[0] || ""} 
            alt={data.name} 
            className='w-full h-full object-cover cursor-pointer 
            transition duration-300 
            group-hover:scale-105'/>
            <button  onClick={headleProductDetail} 
          className='absolute w-full bottom-2 rounded-lg shadow-lg text-black bg-gray-50 font-bold
             px-4 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-4 hover:bg
              group-hover:translate-y-2   duration-300 transition-all '>
                    View Detail
                </button>
        </div>

        {/* Detail body */}
        <div className='p-2 flex flex-col  '>

          <h1 className='uppercase font-bold font-serif'>{data.brand} & {data.category}</h1>
          <div className='flex gap-1'>
             <p className='font-serif font-bold '>${data.price}</p>
           
          </div>
             {/* Rating */}
              <div className="flex items-center mt-1 gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      data.rating > index
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                  <p className='font-medium'>({data.rating})</p>
              </div>
              <button onClick={()=>navigate("/cart")} className='rounded-lg shadow-lg
               mt-2 bg-black text-white font-bold px-4 py-2'>
                    Add To Card 
                </button>

        </div>

       
      </div>
  );
}

export default ProductCard;