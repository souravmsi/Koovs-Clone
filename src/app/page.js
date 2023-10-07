import HeroComponent from "@/components/atoms/HeroComponent";
import NewArrivals from "@/components/molecules/NewArrivals";
import PopularCarousel from "@/components/molecules/PopularCarousel";
import { getData } from "@/utils/api";

export default async function Home() {

  const menData = await getData(
    "https://koovs-backend.onrender.com/api/men-products"
  );
  const womenData = await getData(
    "https://koovs-backend.onrender.com/api/women-products"
  );
  const heroData = await getData(
    "https://koovs-backend.onrender.com/api/hero-components"
  );
  const newArrivalData = await getData(
    "https://koovs-backend.onrender.com/api/new-arrivals"
  );

  return (
    <main>
      <HeroComponent data={heroData} />
      <div className="px-4 md:px-8 xl:px-12">
        <PopularCarousel data={womenData} title={"Shop Women's"} />
        <PopularCarousel data={menData} title={"Shop Men's"} />
        <NewArrivals data={newArrivalData} />
        <PopularCarousel data={womenData} title={"Shop Women's"} />
        <NewArrivals data={newArrivalData} />
        <PopularCarousel data={menData} title={"Shop Men's"} />
        <NewArrivals data={newArrivalData} />
        <PopularCarousel data={womenData} title={"Shop Women's"} />
      </div>
    </main>
  );
}
