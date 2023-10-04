import Slideshow from "@/components/atoms/SlideShow";
import NewArrivals from "@/components/molecules/NewArrivals";
import landinPageData from "@/utils/mock-data/landing-page";
import { carouselData } from "@/utils/mock-data/carousel-data";
import WomenCategories from "@/components/molecules/PopularCarousel";

export default function Home() {
  return (
    <main>
      <Slideshow data={landinPageData} />
      <WomenCategories data={carouselData} title={'TITLE'}/>
      <NewArrivals/>      
    </main>
  );
}
