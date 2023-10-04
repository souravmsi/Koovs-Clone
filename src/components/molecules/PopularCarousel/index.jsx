import React from "react";
import Carousel from "@/components/atoms/Carousel";
import CircularButton from "@/components/atoms/CircularButton";
import Arrow from '@/icons/arrow.svg'

const WomenCategories = ({ title, data }) => {
  console.log(data);
  return (
    <div className="my-24">
      <h2 className="text-5xl mb-16">{title}</h2>
      <Carousel
        options={{
          dragFree: true,
          align: "start",
          loop: true,
        }}
      >
        {data.map(({ id, src }) => (
          <div key = {id} className=" group grow-0 shrink-0 basis-[calc(100%/4)] p-2 h-[535px] relative h-60">
            <div
              className="w-full h-full hover:scale-95 transition-all duration-700"
              style={{ background: `url(${src})` }}
            />

            <h4 className="absolute bottom-6 left-8 font-semibold">Shorts</h4>
            <CircularButton className="group-hover:bg-black group-hover:text-white absolute bottom-6 right-8 bg-white font-semibold rounded-full p-4 hover:scale-125 hover:bg-black hover:text-white transition-all duration-500">
                <Arrow/>
            </CircularButton>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WomenCategories;
