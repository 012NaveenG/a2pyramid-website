import Let_us_connect from "../../components/Let_us_connect.jsx"
import Domains from "./Domains.jsx"
import Hero from "./Hero.jsx"

const About = () => {
  return (
    <div className="sm:w-3/4 mx-auto text-white">
      <Hero />
      <Domains />
      <Let_us_connect />
    </div>
  )
}

export default About
