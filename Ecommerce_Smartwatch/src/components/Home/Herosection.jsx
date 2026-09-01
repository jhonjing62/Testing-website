import React from "react";

function Herosection() {
  return (
    <section className=" min-h-160 bg-linear-to-r from-[#060505] via-[#0b0a0a] to-[#343434] px-2 py-2 bg-cover bg-center" style={{backgroundImage:"url('https://i.pinimg.com/1200x/2d/6e/00/2d6e0069978ae69bdaadd08b2cbe4e1e.jpg')"}}>
      <div className="mx-auto overflow-hidden rounded-lg shadow text-white">
        <div className=" min-h-165 items-center gap-10 px-6 py-12 md:px-14 lg:px-16">
          <div className='mt-20 items-baseline gap-4'>
            <div className="mb-4 flex items-center gap-4">
              <span className="text-2xl">🛒</span>
              <span className="text-xl uppercase font-semibold tracking-[0.2rem]">
                New Collection
              </span>
              <div className="hidden w-32 h-1 sm:block text-red-600" />
            </div>
            <h1 className="uppercase text-6xl md:text-7xl font-bold font-stretch-semi-condensed leading-[1.01] text-white">
              Procision.
              <span className="block text-orange-300">Crafted for time.</span>
            </h1>
            <div className="mt-4 max-w-lg text-gray-300">
              <p className="text-white font-sans">
                Where timeless design meets
                <span className="block "> modern performance.</span>
              </p>
            </div>

            <div className="flex flex-row mt-10 items-center gap-4">
              <button className="border text-gray-800 text-lg uppercase font-bold bg-orange-300 shadow-2xl px-14 py-3 rounded-lg">
                shop new in
              </button>
              <button className="w-xs border border-white uppercase shadow-2xl  text-gray-100 font-bold text-lg rounded-lg px-14 py-4 lg:py-3">
                explore collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
