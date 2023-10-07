import React from "react";
import ProductGrid from "@/components/atoms/ProductGrid";
import ProductCard from "@/components/atoms/ProductCard";

const NewArrivals = ({data}) => {
  return (
    <div className="my-24 flex flex-col">
        <h2 className="text-center text-5xl mb-16">NEW ARRIVALS</h2>
      <ProductGrid>
        {data.map(({ _id, images, brand, title, price, colors }) => (
          <div key={_id} className="w-full md:w-[calc(100%/2)] lg:w-[calc(100%/3)] xl:w-[25%] h-[560px] p-4">
            <ProductCard
              src1={images[0]}
              src2={images[1]}
              brand={brand}
              title={title}
              price={price}
              colors={colors}
              _id = {_id}
            />
          </div>
        ))}
      </ProductGrid>
      <button type='button' className="mx-auto bg-black text-white py-3 px-8 text-sm rounded-md hover:scale-110 transition-all">
        View all
      </button>
    </div>
  );
};

export default NewArrivals;
