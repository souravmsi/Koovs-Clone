import React from "react";
import CircularButton from "../CircularButton";
import View from "@/icons/view.svg";
import Wishlist from "@/icons/wishlist.svg";
import Swatch from "../Swatch";

const ProductCard = ({ src1, src2, brand, title, colors, price }) => {
  return (
    <div className="w-full h-full">
      <div className="group relative w-full h-[80%] overflow-hidden">
        <div
          style={{
            "--image-url1": `url(${src1})`,
            "--image-url2": `url(${src2})`,
          }}
          className="bg-[image:var(--image-url1)] bg-cover w-full h-full transition-all duration-700 group-hover:bg-[image:var(--image-url2)] group-hover:scale-[1.2]"
          src1={src1}
          src2={src2}
        />
        <div className="flex flex-col gap-y-4 absolute top-6 right-4 translate-x-16 group-hover:translate-x-0 duration-500 transition-all">
          <CircularButton className="bg-white p-3 rounded-full  hover:text-white hover:bg-black transition-all">
            <Wishlist />
          </CircularButton>

          <CircularButton className="bg-white p-3 rounded-full hover:text-white hover:bg-black transition-all">
            <View />
          </CircularButton>
        </div>

        <button className="absolute bottom-4 font-medium text-sm bg-white left-0 right-0 mx-8 py-3 rounded-md translate-y-16 group-hover:translate-y-0 duration-500 transition-all hover:text-white hover:bg-black">
          Select options
        </button>
      </div>

      <h4 className="text-[10px] text-gray-600 leading-6 mt-2">{brand}</h4>
      <h4 className="text-sm text-black font-medium leading-6">{title}</h4>
      <h4 className="text-sm text-black leading-6">{`Rs. ${price}.00`}</h4>
      <Swatch colors={colors} />
    </div>
  );
};

export default ProductCard;
