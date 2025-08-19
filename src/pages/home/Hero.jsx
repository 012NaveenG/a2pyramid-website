import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="min-h-[60vh] w-11/12 sm:w-3/4 mx-auto sm:pt-24 pt-12 px-2 sm:px-0 flex flex-col gap-8">
            {/* Headings */}
            <div>
                {/* Plan + Design */}
                <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white">
                    {/* Mobile: break line after each word | Desktop: same line */}
                    <span className="block sm:inline">Plan.</span>{" "}
                    <span className="block sm:inline">Design.</span>
                </h1>

                {/* Build + Maintain */}
                <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white">
                    <span className="block sm:inline">Build.</span>{" "}
                    <span className="block sm:inline">Maintain.</span>
                </h1>
            </div>


            {/* Description + CTA */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <p className="font-extralight text-white text-sm sm:text-base   w-full md:w-1/2">
                    From strategic roadmaps and pixel-perfect designs to robust, scalable
                    code and ongoing support, we partner with you at every step.
                </p>
                <Link
                    to={"/contact-us"}
                    className="px-5 py-3 w-full sm:w-42 rounded-md bg-violet-600 hover:bg-violet-700 transition-all duration-200 text-white font-semibold text-center"
                >
                    Let's Build It
                </Link>
            </div>
        </section>
    )
}

export default Hero
