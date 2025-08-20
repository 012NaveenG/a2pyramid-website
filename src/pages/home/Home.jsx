import BrandsMarquee from "./BrandMarque.jsx"
import Features from "./Features.jsx"
import Hero from "./Hero.jsx"
import HowToConnect from "./HowToConnect.jsx"
import Projects from "./Projects.jsx"
import Services from "./Services.jsx"
import Testimonials from "./Testimonials.jsx"

const Home = () => {
  return (
    <div className="w-screen">
      
        <Hero />
        <BrandsMarquee/>
        <Features/>
        <Projects/>
        <Services/>
        <Testimonials/>
        <HowToConnect/>
    </div>
  )
}

export default Home
