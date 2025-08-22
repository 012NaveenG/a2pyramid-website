"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Teams = () => {
    const sectionRef = useRef(null)
    const leftCardsRef = useRef([])
    const rightCardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=3000",
                    scrub: true,
                    pin: true,
                    markers: false,
                },
            })

            // Left cards
            tl.fromTo(
                leftCardsRef.current,
                { y: 150, opacity: 0, scale: 0.9, rotate: -8 }, // initial
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: -8, // keep tilt
                    stagger: 0.3,
                    duration: 1,
                    ease: "power3.out",
                }
            )

            // Right cards
            tl.fromTo(
                rightCardsRef.current,
                { y: 150, opacity: 0, scale: 0.9, rotate: 8, }, // initial
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 8, // keep tilt
                    stagger: 0.3,
                    duration: 1,
                    ease: "power3.out",
                },
                "+=0.5"
            )

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="w-full text-white min-h-screen py-16 px-4 bg-gradient-to-b from-teal-500 to-teal-700"
        >
            <div className="max-w-6xl mx-auto flex justify-center gap-10">
                {/* Left content */}
                <div className="w-1/2">
                    <h1 className="font-bold text-4xl sm:text-8xl">
                        Meet Our Team That Delivers Your Results
                    </h1>
                    <p className="font-semibold text-sm sm:w-[90%] mt-4">
                        Our architects, designers, and engineers work together to turn your ideas into powerful software.
                        We use agile methods and clear communication to deliver fast, high-quality results.
                        From concept to ongoing support, we’re committed to your success.
                    </p>
                </div>

                {/* Right content */}
                <div className="w-1/2 flex justify-center gap-10">
                    {/* Left column of cards */}
                    <div className="relative w-1/2">
                        <div
                            ref={(el) => (leftCardsRef.current[0] = el)}
                            className="p-3 absolute left-5  -rotate-12 bg-gray-200 text-slate-950 rounded hover:z-10 transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src="/teams/aditya.avif"
                                alt="Aditya Apurv"
                                className="h-56 w-52"
                            />
                            <div className="my-2">
                                <h1 className="font-semibold">Aditya Apurv</h1>
                                <p className="text-sm text-neutral-500">CEO, A2 Pyramid</p>
                            </div>
                        </div>

                        <div
                            ref={(el) => (leftCardsRef.current[1] = el)}
                            className="p-3 absolute left-5 top-[140px] -rotate-[8deg] bg-gray-200 text-slate-950 rounded hover:z-10 transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src="/teams/satish.avif"
                                alt="Satish Kumar"
                                className="h-56 w-52"
                            />
                            <div className="my-2">
                                <h1 className="font-semibold">Satish Kumar</h1>
                                <p className="text-sm text-neutral-500">CTO, A2 Pyramid</p>
                            </div>
                        </div>

                        <div
                            ref={(el) => (leftCardsRef.current[2] = el)}
                            className="p-3 absolute left-5 top-[280px] -rotate-[8deg] bg-gray-200 text-slate-950 rounded hover:z-10 transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src="/teams/kesav.avif"
                                alt="Kesav Nair"
                                className="h-56 w-52"
                            />
                            <div className="my-2">
                                <h1 className="font-semibold">Keshav Nair</h1>
                                <p className="text-sm text-neutral-500">COO, A2 Pyramid</p>
                            </div>
                        </div>
                    </div>

                    {/* Right column of cards */}
                    <div className="relative w-1/2">
                        <div   
                        ref={(el) => (rightCardsRef.current[0] = el)}
                            className="p-3 absolute left-5 top-[0px] rotate-[8deg] bg-gray-200 text-slate-950 rounded hover:z-10 transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src="/teams/ankit.avif"
                                alt="Ankit Dwivedi"
                                className="h-56 w-52"
                            />
                            <div className="my-2">
                                <h1 className="font-semibold">Ankit Dwivedi</h1>
                                <p className="text-sm text-neutral-500">Full-Stack Developer</p>
                            </div>
                        </div>

                        <div
                            ref={(el) => (rightCardsRef.current[1] = el)}
                            className="p-3 absolute left-5 top-[140px] rotate-[8deg] bg-gray-200 text-slate-950 rounded hover:z-10 transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src="/teams/yuvraj.avif"
                                alt="Yuvraj Maheshwari"
                                className="h-56 w-52"
                            />
                            <div className="my-2">
                                <h1 className="font-semibold">Yuvraj Maheshwari</h1>
                                <p className="text-sm text-neutral-500">ML / Web Dev</p>
                            </div>
                        </div>

                        <div
                            ref={(el) => (rightCardsRef.current[2] = el)}
                            className="p-3 absolute left-5 top-[280px] rotate-[8deg] bg-gray-200 text-slate-950 rounded hover:z-10 transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src="/teams/sanya.jpg"
                                alt="Sanya Gupta"
                                className="h-56 w-52"
                            />
                            <div className="my-2">
                                <h1 className="font-semibold">Sanya Gupta</h1>
                                <p className="text-sm text-neutral-500">ML Intern</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Teams
