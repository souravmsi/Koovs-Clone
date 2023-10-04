import Slideshow from "@/components/atoms/SlideShow";
import landinPageData from '@/utils/mock-data/landing-page'

export default function Home() {
  console.log(landinPageData)
  return (
    <main >
      <Slideshow data={landinPageData}/>
    </main>
  )
}
