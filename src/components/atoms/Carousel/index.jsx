'use client'
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ options, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row">{children}</div>
      </div>
    </div>
  );
};

export default Carousel;