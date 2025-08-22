import React from 'react'
import { Link } from 'react-router-dom'

const Let_us_connect = () => {
    return (
        <>
            <section className=" text-white   py-20 px-4 ">
                <div className="flex flex-col gap-6 w-full">
                    {/* Top text */}
                    <h1 className="font-bold text-5xl sm:text-7xl md:text-9xl leading-tight">
                        Ready?
                    </h1>

                    {/* Let's Talk + Button in one line (responsive) */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
                        <h1 className="font-bold text-5xl sm:text-7xl md:text-9xl text-violet-600 ">
                            Let&apos;s Talk
                        </h1>

                        <Link
                            to="https://docs.google.com/forms/d/e/1FAIpQLSdR1ApAqSMxeTHP2C_jn4scqTgLszo5gFV3Wjq4O1pfqpvuzA/viewform"
                            target="_blank"
                            className="px-6 py-3 rounded-md bg-violet-600 hover:bg-violet-700 transition-all duration-200 text-white font-semibold text-lg text-center shadow-md sm:ml-6"
                        >
                            Book Discovery Call
                        </Link>
                    </div>
                </div>

            </section>
            <div className=' hidden sm:block lg:block my-20 border-t border-neutral-700 text-white py-10  '>
                <div className=' flex items-center justify-between'>
                    <p>Designed for user experience, built for results</p>
                    <p>From concept to launch—seamless execution</p>
                    <p>Reliable support & continuous improvements</p>
                </div>


            </div>
        </>
    )
}

export default Let_us_connect
