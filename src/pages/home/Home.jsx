
import BrandsMarquee from "../../components/BrandMarque.jsx"
import FAQs from "./FAQs.jsx"
import Features from "./Features.jsx"
import Hero from "./Hero.jsx"
import HowToConnect from "./HowToConnect.jsx"
import Projects from "./Projects.jsx"
import Services from "./Services.jsx"
import Teams from "./Teams.jsx"
import Testimonials from "./Testimonials.jsx"

const Home = () => {
  return (
    <div className="w-screen">
      <Hero />
      <BrandsMarquee />
      <Features />
      <Projects />
      <Services />
      <Teams />
      <Testimonials />
      <FAQs />
      <HowToConnect />
    </div>
  )
}

export default Home
