import Slideshow from "@/components/atoms/SlideShow";
import PopularCarousel from "@/components/molecules/PopularCarousel";
import landinPageData from '@/utils/mock-data/landing-page'
import { carouselData } from "@/utils/mock-data/carousel-data";

export default function Home() {
  return (
    <main >
      <Slideshow data={landinPageData}/>
      <PopularCarousel title = {"Shop Women's"} data = {carouselData}/>
      <PopularCarousel title = {"Shop Men's"} data = {carouselData}/>
    </main>
  )
}
