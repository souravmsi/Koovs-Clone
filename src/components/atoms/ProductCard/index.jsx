import React from "react";
import CircularButton from "../CircularButton";
import View from "@/icons/view.svg";
import Wishlist from "@/icons/wishlist.svg";
import Swatch from "../Swatch";
import BackgroundDiv from "./BackgroudDiv";

const ProductCard = ({
  src1 = "https://www.koovs.com/cdn/shop/products/KOOVS_20OCT22-1549.jpg?v=1667983172&width=713",
  src2 = "https://www.koovs.com/cdn/shop/files/KOOVS_20OCT22-1557.jpg?v=1683702008&width=713",
  brand = "ESSENTIALS BY KOOVS",
  title = "Albin T-Shirt",
  colors = ["#000080", "#c1e1c1", "#ebe6db"],
  price = 900,
}) => {
  return (
    <div className="w-full h-full">
      <div className="group relative w-full h-[80%] overflow-hidden">
        <BackgroundDiv
          className="w-full h-full transition-all duration-700 group-hover:scale-[1.2]"
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

          <button className="absolute bottom-4 font-medium text-sm bg-white left-0 right-0 mx-4 py-2 rounded-md translate-y-16 group-hover:translate-y-0 duration-500 transition-all hover:text-white hover:bg-black">
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
