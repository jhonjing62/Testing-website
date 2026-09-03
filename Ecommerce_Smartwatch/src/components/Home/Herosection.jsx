import React from "react";
import {FaTruck} from 'react-icons/fa';
import {
  Truck,
  RefreshCw,
  ShieldCheck,
  Headphones,
} from "lucide-react";


function Herosection() {
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
  {
    icon: Headphones,
    title: "CUSTOMER SUPPORT",
    description: "We're here to help",
  },
];
  return (
    <section className=" bg-linear-to-r from-[#060505] via-[#0b0a0a] to-[#343434] bg-cover bg-center" style={{backgroundImage:"url('https://i.pinimg.com/1200x/2d/6e/00/2d6e0069978ae69bdaadd08b2cbe4e1e.jpg')"}}>
      <div className="mx-auto overflow-hidden rounded-lg shadow text-white">
        <div className=" min-h-132 items-center gap-10 px-6 py-12 md:px-14 lg:px-16">

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
              <button className="border group text-gray-800 text-lg uppercase font-bold bg-orange-300 
                  shadow-2xl px-10 py-3 rounded-lg flex items-center
                  transition-all duration-300 ease-in-out hover:-translate-1 active:scale-105
                  hover:bg-orange-200 hover:text-white
              ">
                shop new in
                <span className="transition group-hover:translate-x-2 mx-2"> →</span>
              </button>
              <button className="w-xs border border-gray-300 uppercase shadow-2xl 
                 text-gray-400 font-bold text-lg rounded-lg px-12 py-4 lg:py-3
                  transition-all duration-300 ease-in-out 
                  hover:-translate-1 hover:text-gray-50 active:scale-105 hover:border-white 
                 ">
                explore collection
              </button>
            </div>
          </div>
        </div> 
      </div>
       <div className='shadow h-32 shadow-white border-white mt-4 py-8 px-20'>
            <div className="flex items-center justify-start gap-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
                {features.map(({icon:Icon,title,description},index)=>(
                  <div key={title} className={[" flex items-center justify-cente gap-4 px-4 py-3 ", index === -1 ? "border-l border-white/10": " border-l gap-8 border-white/20"].join(" ")}>
                    <Icon
                      size={45}
                      strokeWidth={1.1}
                      className="shrink-0 text-white/80"
                       />
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
    </section>
  );
}

export default Herosection;
