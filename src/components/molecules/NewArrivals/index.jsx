import React from "react";
import newArrivalData from "@/utils/mock-data/new-arrival-data";
import ProductGrid from "@/components/atoms/ProductGrid";
import ProductCard from "@/components/atoms/ProductCard";

const NewArrivals = () => {
  return (
    <div className="my-24 flex flex-col">
        <h2 className="text-center text-5xl mb-16">NEW ARRIVALS</h2>
      <ProductGrid>
        {newArrivalData.map(({ id, images, brand, title, price, colors }) => (
          <div key={id} className="w-[25%] h-[560px] p-4">
            <ProductCard
              src1={images[0]}
              src2={images[1]}
              brand={brand}
              title={title}
              price={price}
              colors={colors}
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
