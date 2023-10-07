import Link from "next/link";
import React from "react";
import Check from '@/icons/check.svg';

const OrderPage = () => {
  return (
    <div className="p-12 flex flex-col items-center">
      <div className="flex justify-center items-center bg-[#D0E7D2] p-8 px-8 rounded-full text-9xl text-[#79AC78]">
        <Check/>
      </div>
      <h2 className="text-4xl py-4 font-extrabold text-[#7A9D54]">Success</h2>
      <p className="text-xs md:text-base">We received your purchase request</p>
      <p className="text-xs md:text-base pb-8">We will be in touch shortly</p>
      <Link href='/'>
        <button
          type="button"
          className="group relative text-black px-12 py-4 w-fit text-xs font-semibold hover:text-white border border-black rounded-md hover:border-0"
        >
          <div className="bg-white absolute inset-0 -z-10 rounded-md group-hover:scale-x-[1.03] group-hover:scale-y-105 group-hover:bg-black transition-transform duration-700"></div>
          Home
        </button>
      </Link>
    </div>
  );
};

export default OrderPage;
