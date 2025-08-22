
import BrandsMarquee from '../../components/BrandMarque.jsx'
import Let_us_connect from '../../components/Let_us_connect.jsx'
import AllServices from './AllServices.jsx'
import Hero from './Hero.jsx'
import ToolsWeUse from './ToolsWeUse.jsx'

const Services = () => {
    return (
        <div >

            <div className="sm:w-3/4 mx-auto text-white">
                <Hero />
            </div>
            <BrandsMarquee />

            <div className="sm:w-3/4 mx-auto text-white">
                <AllServices />
            </div>
            <div className='bg-white  py-20'>
                <div className="sm:w-3/4 mx-auto">
                    <h1 className="font-bold text-4xl sm:text-7xl w-3/4 pl-10 ">Tools We Use to Create Your Products</h1>

                </div>
                <ToolsWeUse />
            </div>

            <div className="sm:w-3/4 mx-auto text-white">
               <Let_us_connect/>
            </div>
        </div>
    )
}

export default Services
