
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import  ProductData  from "../../Data/ProductData";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Quantity
  const [count, setCount] = useState(1);

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

  // Increase quantity
  const increase = () => {
    setCount((prev) => prev + 1);
  };

  // Decrease quantity
  const decrease = () => {
    setCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="min-h-screen bg-white text-[#171717]">

      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* ================= PRODUCT ================= */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* ================= IMAGES ================= */}
          <div className="flex gap-5">

            {/* Thumbnails */}
            <div className="flex w-[120px] flex-col gap-3">

              {product.imgs?.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`h-[120px] w-[120px] overflow-hidden rounded-lg border-2 ${
                    selectedImage === index
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}

            </div>

            {/* Main Image */}
            <div className="flex flex-1 items-center justify-center overflow-hidden rounded-xl bg-gray-100">

              {product.imgs?.length > 0 ? (
                <img
                  src={product.imgs[selectedImage]}
                  alt={product.name}
                  className="h-[600px] w-full object-contain p-8"
                />
              ) : (
                <p className="text-gray-500">
                  No image available
                </p>
              )}

            </div>

          </div>

          {/* ================= PRODUCT INFO ================= */}
          <div className="px-5">

            {/* Category */}
            <p className="text-xl text-gray-500">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="mt-2 text-3xl font-bold">
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-4 text-xl font-bold">
              ${product.price}
            </p>

            {/* Quantity */}
            <div className="mt-6 flex w-fit items-center overflow-hidden rounded-xl border shadow-sm">

              <button
                type="button"
                onClick={decrease}
                className="bg-gray-200 px-4 py-2 text-2xl font-bold hover:bg-gray-300"
              >
                -
              </button>

              <p className="min-w-[60px] text-center text-lg font-semibold">
                {count}
              </p>

              <button
                type="button"
                onClick={increase}
                className="bg-gray-200 px-4 py-2 text-2xl font-bold hover:bg-gray-300"
              >
                +
              </button>

            </div>

            {/* Add To Cart */}
            <button
              type="button"
              className="mt-6 rounded-lg bg-black px-8 py-3 font-bold text-white transition hover:bg-gray-800"
            >
              Add To Cart
            </button>

            {/* Back Home */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="ml-3 mt-6 rounded-lg border border-black px-6 py-3 font-semibold transition hover:bg-black hover:text-white"
            >
              Back to Home
            </button>

          </div>
        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        <div className="mt-16">

          <h2 className="mb-6 text-2xl font-bold">
            Related Products
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {relatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="cursor-pointer rounded-xl border p-4 transition hover:shadow-lg"
              >

                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={item.imgs?.[0] || ""}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Name */}
                <h3 className="mt-3 font-semibold">
                  {item.name}
                </h3>

                {/* Price */}
                <p className="mt-2 font-bold">
                  ${item.price}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetail;

