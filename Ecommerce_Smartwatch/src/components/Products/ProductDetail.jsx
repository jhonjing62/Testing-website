import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaArrowLeft } from "react-icons/fa";
import ProductData from "../../Data/ProductData";
import { useProduct } from "../../Context/ContextProducts";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useProduct();

  // Find product
  const product = ProductData.find(
    (item) => item.id === Number(id)
  );

  // Selected image
  const [selectedImage, setSelectedImage] = useState(0);

  // Selected color
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );

  // Quantity
  const [quantity, setQuantity] = useState(1);

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">
          Product Not Found
        </h1>

        <button
          onClick={() => navigate("/shop")}
          className="bg-black text-white px-5 py-2 rounded-md"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  // Add to cart
  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      selectedColor,
      quantity,
    };

    addToCart(cartProduct);

    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="
            flex
            items-center
            gap-2
            mb-6
            text-gray-600
            hover:text-black
          "
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Product Main */}
        <div className="
          bg-white
          rounded-xl
          shadow-lg
          p-6
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
        ">

          {/* ================= IMAGE SECTION ================= */}
          <div>

            {/* Main Image */}
            <div className="
              w-full
              aspect-square
              overflow-hidden
              rounded-lg
              bg-gray-100
            ">
              <img
                src={product.imgs?.[selectedImage]}
                alt={product.name}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            {/* Thumbnail Images */}
            <div className="
              flex
              gap-3
              mt-4
              overflow-x-auto
            ">
              {product.imgs?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`
                    w-20
                    h-20
                    rounded-md
                    overflow-hidden
                    border-2
                    ${
                      selectedImage === index
                        ? "border-black"
                        : "border-gray-200"
                    }
                  `}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ================= PRODUCT INFO ================= */}
          <div>

            {/* Category */}
            <p className="text-sm text-gray-500 uppercase">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="
              text-3xl
              md:text-4xl
              font-bold
              mt-2
            ">
              {product.name}
            </h1>

            {/* Brand */}
            <p className="text-gray-500 mt-2">
              Brand:{" "}
              <span className="font-semibold text-black">
                {product.brand}
              </span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">

              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      product.rating > index
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <span className="text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-5">

              <span className="
                text-3xl
                font-bold
              ">
                ${product.price}
              </span>

              {product.originalprice && (
                <span className="
                  text-lg
                  text-gray-400
                  line-through
                ">
                  ${product.originalprice}
                </span>
              )}

              {product.discount && (
                <span className="
                  bg-red-500
                  text-white
                  px-2
                  py-1
                  rounded
                  text-sm
                ">
                  -{product.discount}%
                </span>
              )}
            </div>

            {/* Description */}
            <p className="
              text-gray-600
              leading-7
              mt-5
            ">
              {product.description}
            </p>

            {/* ================= COLORS ================= */}
            {product.colors?.length > 0 && (
              <div className="mt-6">

                <h3 className="font-semibold mb-3">
                  Color:
                  <span className="font-normal ml-2">
                    {selectedColor}
                  </span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`
                        px-4
                        py-2
                        rounded-md
                        border
                        transition
                        ${
                          selectedColor === color
                            ? "bg-black text-white border-black"
                            : "bg-white text-black border-gray-300"
                        }
                      `}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ================= QUANTITY ================= */}
            <div className="mt-6">

              <h3 className="font-semibold mb-3">
                Quantity
              </h3>

              <div className="
                flex
                items-center
                border
                border-gray-300
                rounded-md
                w-fit
              ">

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                  className="
                    px-4
                    py-2
                    text-xl
                  "
                >
                  -
                </button>

                <span className="
                  px-5
                  py-2
                  border-x
                ">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.min(product.stock, prev + 1)
                    )
                  }
                  className="
                    px-4
                    py-2
                    text-xl
                  "
                >
                  +
                </button>

              </div>
            </div>

            {/* Stock */}
            <p className="mt-4 text-sm text-gray-500">
              {product.stock > 0
                ? `${product.stock} items available`
                : "Out of stock"}
            </p>

            {/* ================= ADD TO CART ================= */}
            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className="
                w-full
                mt-6
                bg-black
                text-white
                py-4
                rounded-lg
                font-semibold
                text-lg
                hover:bg-gray-800
                transition
                disabled:bg-gray-400
                disabled:cursor-not-allowed
              "
            >
              {product.stock > 0
                ? "Add to Cart"
                : "Out of Stock"}
            </button>

            {/* Buy Now */}
            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className="
                w-full
                mt-3
                border
                border-black
                text-black
                py-4
                rounded-lg
                font-semibold
                hover:bg-black
                hover:text-white
                transition
              "
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* ================= SPECIFICATION ================= */}
        <div className="
          bg-white
          rounded-xl
          shadow-lg
          p-6
          mt-8
        ">

          <h2 className="
            text-2xl
            font-bold
            mb-5
          ">
            Specifications
          </h2>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
          ">

            {Object.entries(product.specification || {}).map(
              ([key, value]) => (
                <div
                  key={key}
                  className="
                    flex
                    justify-between
                    border-b
                    py-3
                  "
                >
                  <span className="
                    font-semibold
                    capitalize
                  ">
                    {key}
                  </span>

                  <span className="text-gray-600">
                    {value}
                  </span>
                </div>
              )
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;