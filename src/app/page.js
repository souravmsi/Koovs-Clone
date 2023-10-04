import ProductCard from "@/components/atoms/ProductCard";
import Slideshow from "@/components/atoms/SlideShow";
import landinPageData from "@/utils/mock-data/landing-page";

export default function Home() {
  return (
    <main>
      <Slideshow data={landinPageData} />
      <div className="flex flex-wrap">
        <div className="w-[25%] h-[560px] p-4">
          <ProductCard />
        </div>

        <div className="w-[25%] h-[560px] p-4">
          <ProductCard />
        </div>

        <div className="w-[25%] h-[560px] p-4">
          <ProductCard />
        </div>

        <div className="w-[25%] h-[560px] p-4">
          <ProductCard />
        </div>

        <div className="w-[25%] h-[560px] p-4">
          <ProductCard />
        </div>

        <div className="w-[25%] h-[560px] p-4">
          <ProductCard />
        </div>

        <div className="w-[25%] h-[560px] p-4">
          <ProductCard />
        </div>


      </div>
    </main>
  );
}
