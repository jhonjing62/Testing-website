
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import  ProductData  from "../../Data/ProductData";
import { useCart } from "../../Context/ContextCarts";
import { FaStar } from "react-icons/fa";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {carts,decreaseQuality,increaseQuality,totalPrice,totalItem} = useCart();
  // Selected product image
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
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="max-w-7xl bg-white relative text-[#171717]">

      <div className=" mt-15 w-full px-4 py-4">

        <div className=" flex justify-between gap-2">
              {/* Product Image  */}
              <div className=" flex w-full justify-start gap-4 ">
                {/* Small image  */}
                <div className="flex flex-col gap-3 ">{
                    product.imgs?.map((imag,index)=>(
                      <button key={imag} onClick={()=>setSelectedImage(index)} 
                      className={`overflow-hidden h-45 w-35 border-2 bg-gray-800 rounded-lg
                               ${selectedImage===index? "border-slate-500":"border-gray-300"}`}>
                         <img src={imag}  alt={`${product.name} ${index + 1}`} className="object-cover h-full w-full" />
                         </button>
                    ))
                  }
                </div>

                {/* Big image  */}
                <div className="h-160 w-160 items-center overflow-hidden
                                 transition-transform rounded-lg border-2 border-slate-300 p-2">{
                    <img className="object-cover cursor-pointer w-full h-full " src={product.imgs[selectedImage]} alt="" />
                  }
                </div>

              </div>
              {/* Detail about products */}
              <div className="w-full relative py-2 px-2">
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
                      <FaStar key={_} className={`text-2xl ${product.rating>=index? "text-amber-300":"text-gray-300"}`}/>
                    ))}</div>

              </div>

        </div>

       
        

      </div>
    </div>
  );
}

export default ProductDetail;

