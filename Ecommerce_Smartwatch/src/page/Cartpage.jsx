import React from 'react'
import { useCart } from '../Context/ContextCarts'
import { useNavigate, useParams } from 'react-router-dom';
import ProductData from '../Data/ProductData';
import {Truck,
  RefreshCw,
  ShieldCheck,
  Trash2
} from "lucide-react";
function Cartpage() {
  const features = [
          {
              icon: Truck,
              title: "FREE SHIPPING",
              description: "On orders over $75",
            },
            {
              icon: RefreshCw,
              title: "EASY RETURNS",
              description: "30-day hassle free returns",
            },
            {
              icon: ShieldCheck,
              title: "SECURE PAYMENT",
              description: "100% secure checkout",
            },
  ]
  const {id} = useParams();
  const navigate = useNavigate();
   const {carts,addToCarts,decreaseQuantity,increaseQuantity,removedFromCarts,totalPrice,totalItem} = useCart();
   const data = ProductData.filter((item)=>item.id === Number(id));
   const itemsCart= carts.find((item)=>item.id === data.id );

   const discout = 7;
  const discountTotal = totalPrice * (discout/100);
  const shopping = carts.length>3 || carts.length === 0 ? "Free" : discountTotal.toFixed(2);
  return (
    <div className='min-h-screen bg-gray-50 mt-6 flex py-10'>
      <div className='w-full mx-auto'>
          {/* header about Carts  */}
          <div className='mb-5 px-7 flex flex-col bg-blue-100 py-8 h-40'>
              <h1 className='text-5xl font-semibold  text-gray-900'>Your Cart</h1>
              <p className='text-lg mt-1 text-gray-500'>Review your items and processed to checkout when you're ready.</p>
          </div>

          {/* carts items */}
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 px-10'>
              <div className='lg:col-span-2 px-4 space-y-6'>
                  <div className='shadow-lg rounded-lg bg-gray-100'>
                    {carts.length===0 ? (
                        <div className='flex py-12 flex-col justify-center items-center '>
                            <div className="mb-2 text-2xl">🛒</div>
                            <h1 className='text-2xl'>Your cart is empty </h1>
                            <p className="mt-2 text-gray-500">Add some products to your cart to continue.</p>
                        </div>
                     ) : (
                        <div>
                              <div className='flex gap-1 items-center mb-1 px-4 py-3'>
                                <h1 className=' font-bold text-2xl'>Cart Items :</h1>
                                <h1 className='font-bold text-2xl'>({carts.length=== 0 ? 0 : totalItem})</h1>
                              </div>
                          <div className=' divide-y-2 divide-gray-200'>  
                              {
                                carts.map((item)=>(
                                  <div key={item.id } className=''>
                                        <div  className='items-center flex justify-between
                                             mb-1 gap-5 sm:flex-row sm:items-cente px-3 py-6'>
                                            <div className='flex-1'>
                                                <div className='flex justify-between items-center gap-4'>
                                                    <img src={item.imgs[0]|| ""} alt={item.name} className='rounded-lg object-cover w-25 h-25'/>
                                                        <div className=''>
                                                            <h1 className='font-bold'>{item.name}</h1>
                                                            <p className=''>{item.category}</p>
                                                            <p className='text-sm font-bold mt-1 text-gray-900'>${item.price.toFixed(2)} each</p>
                                                        </div>
                                                </div>
                                            </div>
                                           
                                            <div className='flex-2 '>
                                               <div className='flex justify-center items-end'>
                                                   <div className='border  w-35 px-3 rounded-xl py-2  flex justify-between border-slate-200 shadow-lg'>
                                                    <button className='text-lg font-bold' onClick={()=>increaseQuantity(item)}>+</button>
                                                    <span className='font-bold text-lg '>{carts.length === 0 ? 0 : item?.quantity}</span>
                                                    <button className='text-lg font-bold' onClick={()=>decreaseQuantity(item)}>−</button>
                                                </div>
                                               </div>
                                            </div>
                                            <div className='flex-1 mx-auto'>
                                                  <div className='flex flex-col gap-6 items-end'>
                                                  <button onClick={()=>removedFromCarts(item)} className='text-red-600 text-lg'><Trash2/></button>
                                                  <span className='font-bold text-slate-900'>${totalPrice.toFixed(2)}</span> 
                                                </div>
                                            </div>
                                      </div>
                                  </div>
                                ))}
                          </div>  
                        </div>
                    )}
                  </div>
              </div>

              <div className='lg:col-span-1 '>
                <div className='sticky top-20 p-6 rounded-lg bg-white shadow border border-slate-50'>
                  <h2 className='text-xl text-gray-900  font-bold mb-6'>Order Summary</h2>
                  <div className='space-y-4 text-sm'>
                      <div className='flex justify-between items-center mt-2 text-black'>
                        <span className='font-medium text-gray-700 text-sm '>Subtotal ({carts.length=== 0 ? 0 : totalItem} items)</span><span className='font-medium text-lg'>${totalPrice}</span>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-sm font-medium text-gray-700'>Shopping</span><span className='font-medium'>${shopping}</span>
                      </div>
                      <div className='border-t-2 border-slate-300 px-1'>
                         <div className='flex justify-between items-center mt-3'>
                              <h2 className='font-bold text-xl text-gray-900'>Total</h2>
                              <h2 className='font-bold text-xl text-gray-900'>${totalPrice.toFixed(2)}</h2>
                         </div>
                         <button className='w-full mt-6 border px-4 py-3 rounded-lg text-lg font-semibold text-white
                              bg-blue-700
                         '>Processed to Checkout</button>
                      </div>

                      <div className='border-t-2 border-slate-200 '>
                        <div className='flex flex-col gap-4'>
                            {features.map(({icon:Icon,title,description},index)=>(
                              <div key={title}  className={[" flex items-center justify-cente gap-4 px-4 py-3 ", index === -1 ? "border-l border-white/10": " border-l gap-8 border-white/20"].join(" ")}>
                                  <Icon strokeWidth={1.1} size={25} className='text-white/80 shrink-0 '/>
                                  <div className="leading-tight"> 
                                        <h2 className="text-white font-semibold">{title}</h2>
                                        <p className="text-white/55 font-normal mt-2">{description}</p>
                                  </div>
                              </div>
                            ))

                            }
                        </div>

                      </div>
                  </div>

                </div>
              </div>
             
          </div>
      </div> 
    </div>
  )
}

export default Cartpage;