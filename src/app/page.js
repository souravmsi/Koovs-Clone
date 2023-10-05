import HeroComponent from "@/components/atoms/HeroComponent";
import NewArrivals from "@/components/molecules/NewArrivals";
import PopularCarousel from "@/components/molecules/PopularCarousel";
import { getData } from "@/utils/api";

export default async function Home() {
  const menData = await getData("http://localhost:8000/api/men-products");
  const womenData = await getData("http://localhost:8000/api/women-products");
  const heroData = await getData("http://localhost:8000/api/hero-components");
  const newArrivalData = await getData(
    "http://localhost:8000/api/new-arrivals"
  );

  return (
    <main>
      <HeroComponent data={heroData} />
      <div className="px-4 md:px-8 xl:px-12">
        <PopularCarousel data={womenData} title={"Shop Women's"} />
        <PopularCarousel data={menData} title={"Shop Men's"} />
        <NewArrivals data={newArrivalData} />
      </div>
    </main>
  );
}
