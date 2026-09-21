
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import  ProductData  from "../../Data/ProductData";
import { useCart } from "../../Context/ContextCarts";
import { FaStar,FaShopify } from "react-icons/fa";
import ProductCard from "./ProductCard";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {carts,addToCarts,decreaseQuantity,increaseQuantity,totalPrice,totalItem} = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  // Find product
  const product = ProductData.find(
    (item) => item.id === Number(id)
  );
  // Product not found
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="text-xl font-extrabold">
          Product Not Found
        </h2>

        <button
          onClick={() => navigate("/")}
          className="mt-4 rounded-lg bg-black px-5 py-2 text-white"
        >
          Back to Home
        </button>
      </div>
    );
  }

  // Related products
  const relatedProducts = ProductData
    .filter(
      (item) =>
        item.id !== product.id &&
        item.brand === product.brand
    )
    .slice(0, 5);
   
  const handlerCart = ()=>{
    navigate("/cart")
  }
  const handleBuycart =()=>{
    addToCarts(product);
  }
  const cartItem = carts.find((item)=>(
    item.id === product.id
  ))
 const Totalprice = cartItem?.quantity*cartItem?.price;

  return (
    <div className=" bg-white relative text-[#171717]">

      <div className=" mt-15 w-full px-4 py-4">

        <div className=" flex gap-2">
              {/* Product Image  */}
             <div className="flex-1 w-full">
                 <div className=" flex justify-between gap-4 ">
                      {/* Small image  */}
                      <div className="flex flex-col gap-3 ">{
                          product.imgs?.map((imag,index)=>(
                            <button key={imag} onClick={()=>setSelectedImage(index)} 
                            className={`overflow-hidden group h-51 w-45 border-2 bg-gray-300 rounded-lg
                                    ${selectedImage===index? "border-slate-200":"border-gray-200"}`}>
                              <img src={imag}  alt={`${product.name} ${index + 1}`} className="object-cover h-full w-full transition-all duration-200 
                             group-active:scale-95" />
                              </button>
                          ))
                        }
                      </div>

                        {/* Big image  */}
                        <div className="items-center h-auto w-175 flex-1">
                            <div className=" h-160 relative w-175 items-center overflow-hidden
                                            transition-transform rounded-lg border border-slate-100 shadow-sm p-2">{
                                <img className="object-cover cursor-pointer w-full h-full " src={product.imgs[selectedImage]} alt="" />
                              }
                            </div>
                        </div>

                  </div>
             </div>


              {/* Detail about products */}
              <div className="flex-1 relative py-2 px-2  border border-slate-50 shadow-sm rounded-lg">
                 <div onClick={()=>navigate("/")} className="group relative ">
                   <button  className="shadow-md rounded-md text-white bg-black 
                   items-center flex justify-between shadow-slate-300 px-5 gap-1 py-3 font-bold
                    transition-all duration-500 group-active:scale-90 cursor-pointer 
                   " >
                    <span className="text-xs transition-all duration-300 group-hover:-translate-x-1">←</span>
                     Back Home</button>
                 </div>
                 <div className="flex gap-2 items-center mt-4 w-full">
                   <h1 className="text-2xl  font-bold font-sans uppercase">{product.category},{product.brand} ,{product.name}</h1>
                 </div>
                 <div className="mt-2 flex items-center gap-2">
                    <p className="text-gray-400 font-bold font-sans">Price :</p>
                     <p className="font-bold  text-2xl">{product.price}$</p>
                 </div>

                 <div className="gap-1 mt-3 flex">{
                    [...Array(5)].map((_,index)=>(
                      <FaStar key={index} className={`text-2xl ${product.rating>=index+1? "text-amber-300":"text-gray-300"}`}/>
                    ))}
                  </div>
                   <hr className="border border-gray-200 mt-6 mb-2 w-full"/>
                  <div className="">
                    <h2 className="font-bold text-slate-600 text-xl ml-2">Quanlity :</h2>
                    <div className=" w-40 mt-2 rounded-lg items-center  border-2 flex justify-between">
                      <button onClick={()=>increaseQuantity(product)} className="text-2xl font-bold text-white
                       bg-black w-10 rounded-md">+</button>
                      <span className="text-lg font-bold">{carts.length === 0 ? 0 :cartItem?.quantity}</span>
                      <button onClick={()=>decreaseQuantity(product)} className="text-2xl font-bold text-white
                       bg-black w-10 rounded-md">−</button>
                    </div>
                    <div className="mt-3 mb-2">
                      <p className="text-lg font-bold text-slate-600">Total Price :</p>
                      <p className="font-bold text-slate-700 font-sans text-2xl ">$ {carts.length=== 0? 0 : Totalprice}</p>
                    </div>


                    {/* button cart  */}
                    <div className="flex gap-3 w-auto mt-4">
                      <button onClick={handlerCart} className="flex items-center gap-1 shadow-lg px-5 font-serif font-bold py-2 border-2
                          rounded-lg text-lg text-white bg-black transition-all duration-300 active:scale-95
                      "><FaShopify/> Add To Cart</button>
                      <button onClick={handleBuycart} className="flex items-center gap-1 shadow-lg px-5 font-serif font-bold py-2 border-2
                          rounded-lg text-lg text-white bg-black transition-all duration-300 active:scale-95
                      "><FaShopify/> Buy Now</button>
                      
                    </div>

                  </div>


              </div>

        </div>

       <div className="max-w-7xl items-center m-auto mt-7"> 
        <h1 className="uppercase font-bold text-3xl font-serif mb-4">Relate Product</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">{
            relatedProducts.map((item)=>(
                <div key={item.id} className="relative group w-full h-full">
                    <div onClick={()=>navigate(`/products/${item.id}`)} className="group shadow-lg border-2 border-slate-50 h-auto">
                        <img  src={item.imgs[0] || ""} alt={item.name} className="transition-all duration-300 active:scale-95 overflow-hidden object-cover w-full h-70"/>
                     </div>
                </div>
            ))
           }</div>
       </div>
        

      </div>
    </div>
  );
}

export default ProductDetail;

