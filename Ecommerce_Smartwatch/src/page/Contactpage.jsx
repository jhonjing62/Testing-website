import React, { useState } from "react";
const initialCart = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 25,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 60,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80",
  },
];
export default function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const updateQuantity = (id, amount) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  };
  const removeItem = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 10;
  const total = subtotal + shipping;
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      {" "}
      <div className="mx-auto max-w-7xl">
        {" "}
        {/* Header */}{" "}
        <div className="mb-8">
          {" "}
          <h1 className="text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>{" "}
          <p className="mt-2 text-gray-500">
            {" "}
            Review your items and complete your order.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Cart Items */}{" "}
          <div className="space-y-6 lg:col-span-2">
            {" "}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              {" "}
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                {" "}
                Your Items{" "}
              </h2>{" "}
              {cart.length === 0 ? (
                <div className="py-12 text-center">
                  {" "}
                  <div className="mb-4 text-5xl">🛒</div>{" "}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {" "}
                    Your cart is empty{" "}
                  </h3>{" "}
                  <p className="mt-2 text-gray-500">
                    {" "}
                    Add some products to your cart to continue.{" "}
                  </p>{" "}
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {" "}
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center"
                    >
                      {" "}
                      {/* Product */}{" "}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 rounded-xl object-cover"
                      />{" "}
                      <div className="flex-1">
                       
                        <h3 className="font-semibold text-gray-900">
                         
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {" "}
                          ${item.price.toFixed(2)} each{" "}
                        </p>{" "}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="mt-2 text-sm font-medium text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>{" "}
                      {/* Quantity */}{" "}
                      <div className="flex items-center rounded-lg border border-gray-200">
                        {" "}
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-2 text-lg text-gray-600 hover:bg-gray-100"
                        >

                          −
                        </button>
                        <span className="min-w-10 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-3 py-2 text-lg text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      {/* Price */}{" "}
                      <div className="text-right font-semibold text-gray-900">
                        {" "}
                        ${(item.price * item.quantity).toFixed(2)}{" "}
                      </div>{" "}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Customer Form */}{" "}
            {cart.length > 0 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Order submitted!");
                }}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                {" "}
                <h2 className="mb-6 text-xl font-semibold text-gray-900">
                  {" "}
                  Customer Information{" "}
                </h2>{" "}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {" "}
                  <div>
                    {" "}
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {" "}
                      First Name{" "}
                    </label>{" "}
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {" "}
                      Last Name{" "}
                    </label>{" "}
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {" "}
                      Email{" "}
                    </label>{" "}
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {" "}
                      Phone{" "}
                    </label>{" "}
                    <input
                      type="tel"
                      required
                      placeholder="+855 12 345 678"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                    />{" "}
                  </div>{" "}
                  <div className="sm:col-span-2">
                    {" "}
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {" "}
                      Address{" "}
                    </label>{" "}
                    <input
                      type="text"
                      required
                      placeholder="Street address"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {" "}
                      City{" "}
                    </label>{" "}
                    <input
                      type="text"
                      required
                      placeholder="Phnom Penh"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {" "}
                      Country{" "}
                    </label>{" "}
                    <select
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black focus:ring-2 focus:ring-gray-200"
                      defaultValue="Cambodia"
                    >
                      {" "}
                      <option>Cambodia</option> <option>Thailand</option>{" "}
                      <option>Vietnam</option>{" "}
                      <option>United States</option>{" "}
                    </select>{" "}
                  </div>{" "}
                  <div className="sm:col-span-2">
                    {" "}
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {" "}
                      Order Notes{" "}
                    </label>{" "}
                    <textarea
                      rows="4"
                      placeholder="Additional information about your order..."
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black focus:ring-2 focus:ring-gray-200"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
                >
                  {" "}
                  Place Order{" "}
                </button>{" "}
              </form>
            )}{" "}
          </div>
          {/* Order Summary */}{" "}
          <div className="lg:col-span-1">
            
            <div className="sticky top-20 rounded-2xl bg-white p-6 shadow-sm">
              
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                
                Order Summary{" "}
              </h2>
              <div className="space-y-4 text-sm">
            
                <div className="flex justify-between text-gray-600">
                  
                  <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  
                  <span>Shipping</span>
                  <span>
                    
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}{" "}
                  </span>{" "}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  {" "}
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    {" "}
                    <span>Total</span> <span>${total.toFixed(2)}</span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {subtotal > 0 && subtotal < 100 && (
                <p className="mt-5 rounded-lg bg-gray-100 p-3 text-sm text-gray-600">
                  {" "}
                  Add ${(100 - subtotal).toFixed(2)} more to get free
                  shipping.{" "}
                </p>
              )}{" "}
            </div>{" "}
          </div>


        </div>{" "}
      </div>{" "}
    </div>
  );
}
