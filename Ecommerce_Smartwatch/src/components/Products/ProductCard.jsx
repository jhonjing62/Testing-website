import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useProduct } from "../../Context/ContextProducts";
import ProductData from "../../Data/ProductData";


function ProductCard({ data }) {
  const navigate = useNavigate();
  const { addToCart } = useProduct();

  // Go to Product Detail
  const handleProductClick = () => {
    navigate(`/product/${data.id}`);
  };

  // Add product to cart
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(data);
  };

  return (
    <div
      onClick={handleProductClick}
      className="
        overflow-hidden
        rounded-lg
        group
        transition-all
        duration-300
        relative
        flex
        flex-col
        shadow-lg
        hover:scale-105
        hover:-translate-y-2
        hover:shadow-md
        hover:shadow-gray-400/30
        cursor-pointer
        bg-white
      "
    >
      {/* Product Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={data.imgs?.[0] || ""}
          alt={data.name}
          className="
            w-full
            h-full
            object-cover
            transition
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Product Information */}
      <div className="p-3 flex flex-col">

        {/* Category + Brand */}
        <p className="font-serif text-gray-500 text-sm">
          {data.category}, {data.brand}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-lg mt-1">
          {data.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <p className="font-bold text-lg">
            ${data.price}
          </p>

          {data.originalprice && (
            <p className="text-gray-400 line-through text-sm">
              ${data.originalprice}
            </p>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2 gap-1">
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

          <span className="text-sm text-gray-500 ml-1">
            ({data.reviews})
          </span>
        </div>

        {/* Stock */}
        <p className="text-sm text-gray-500 mt-1">
          Stock: {data.stock}
        </p>

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="
            mt-3
            bg-black
            text-white
            py-2
            rounded-md
            hover:bg-gray-800
            transition
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;