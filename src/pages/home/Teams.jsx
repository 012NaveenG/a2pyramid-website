"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    { name: "Aditya Apurv", role: "CEO, A2 Pyramid", img: "/teams/aditya.avif" },
    { name: "Satish Kumar", role: "CTO, A2 Pyramid", img: "/teams/satish.avif" },
    { name: "Keshav Nair", role: "COO, A2 Pyramid", img: "/teams/kesav.avif" },
    { name: "Ankit Dwivedi", role: "Full-Stack Developer", img: "/teams/ankit.avif" },
    { name: "Yuvraj Maheshwari", role: "ML / Web Dev", img: "/teams/yuvraj.avif" },
    { name: "Sanya Gupta", role: "ML Intern", img: "/teams/sanya.jpg" },
];

const Teams = () => {
    const sectionRef = useRef(null);
    const leftCardsRef = useRef([]);
    const rightCardsRef = useRef([]);
    const [isDesktop, setIsDesktop] = useState(false);

    // 🔹 Desktop stacked animation
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener("resize", handleResize);

        if (isDesktop) {
            const ctx = gsap.context(() => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=3000",
                        scrub: true,
                        pin: true,
                    },
                });

                // Left cards
                tl.fromTo(
                    leftCardsRef.current,
                    { y: 150, opacity: 0, scale: 0.9, rotate: -8 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotate: -8,
                        stagger: 0.3,
                        duration: 1,
                        ease: "power3.out",
                    }
                );

                // Right cards
                tl.fromTo(
                    rightCardsRef.current,
                    { y: 150, opacity: 0, scale: 0.9, rotate: 8 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotate: 8,
                        stagger: 0.3,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "+=0.5"
                );
            }, sectionRef);

            return () => ctx.revert();
        }

        return () => window.removeEventListener("resize", handleResize);
    }, [isDesktop]);

    // 🔹 Mobile carousel animation (GSAP)
    const [index, setIndex] = useState(0);
    const cardsRef = useRef([]);

    useEffect(() => {
        if (!isDesktop) {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % teamMembers.length);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [isDesktop]);

    useEffect(() => {
        if (!isDesktop) {
            cardsRef.current.forEach((card, i) => {
                if (!card) return;

                const isActive = i === index;
                const isPrev = i === (index - 1 + teamMembers.length) % teamMembers.length;
                const isNext = i === (index + 1) % teamMembers.length;

                if (isActive) {
                    gsap.to(card, {
                        x: 0,
                        scale: 1,
                        opacity: 1,
                        zIndex: 3,
                        duration: 0.6,
                        ease: "power3.out",
                    });
                } else if (isPrev) {
                    gsap.to(card, {
                        x: -150,
                        scale: 0.8,
                        opacity: 0.6,
                        zIndex: 2,
                        duration: 0.6,
                        ease: "power3.out",
                    });
                } else if (isNext) {
                    gsap.to(card, {
                        x: 150,
                        scale: 0.8,
                        opacity: 0.6,
                        zIndex: 2,
                        duration: 0.6,
                        ease: "power3.out",
                    });
                } else {
                    gsap.to(card, {
                        x: 0,
                        scale: 0.5,
                        opacity: 0,
                        zIndex: 0,
                        duration: 0.6,
                        ease: "power3.out",
                    });
                }
            });
        }
    }, [index, isDesktop]);

    return (
        <section
            ref={sectionRef}
            className="w-full text-white py-16 px-4 bg-gradient-to-b from-teal-500 to-teal-700"
        >
            <div className="max-w-6xl mx-auto">
                {/* 🔹 Mobile layout → GSAP Carousel */}
                {!isDesktop && (
                    <div>
                        <div className="mb-10 text-center">
                            <h1 className="font-bold text-3xl sm:text-5xl">
                                Meet Our Team That Delivers Your Results
                            </h1>
                            <p className="font-semibold text-sm sm:text-base mt-4 lg:w-[70%] mx-auto">
                                Our architects, designers, and engineers work together to turn your
                                ideas into powerful software. From concept to ongoing support, we’re
                                committed to your success.
                            </p>
                        </div>
                        <div className="relative flex items-center justify-center w-full   h-[220px] overflow-hidden">
                            {teamMembers.map((member, i) => (
                                <div
                                    key={i}
                                    ref={(el) => (cardsRef.current[i] = el)}
                                    className="absolute w-48 p-3 bg-gray-200 text-slate-950 rounded-lg text-center shadow-lg"
                                >
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="h-36 w-full object-cover rounded"
                                    />
                                    <div className="mt-2">
                                        <h1 className="font-semibold text-sm sm:text-base">{member.name}</h1>
                                        <p className="text-xs sm:text-sm text-neutral-500">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 🔹 Desktop layout → stacked cards with scroll animation */}
                {isDesktop && (
                    <div className="flex w-full justify-center gap-10 relative mt-12">
                        <div className="w-1/2 mb-10 text-center lg:text-left">
                            <h1 className="font-bold text-3xl sm:text-5xl lg:text-8xl">
                                Meet Our Team That Delivers Your Results
                            </h1>
                            <p className="font-semibold text-sm sm:text-base mt-4 mx-auto">
                                Our architects, designers, and engineers work together to turn your
                                ideas into powerful software. From concept to ongoing support, we’re
                                committed to your success.
                            </p>
                        </div>

                        <div className="w-1/2 flex justify-center gap-10 relative">
                            {/* Left column of cards */}
                            <div className="relative w-1/2 min-h-[550px]">
                                {teamMembers.slice(0, 3).map((m, i) => (
                                    <div
                                        key={i}
                                        ref={(el) => (leftCardsRef.current[i] = el)}
                                        className={`p-3 absolute left-2 sm:left-5 top-[${i * 140}px] -rotate-[8deg] bg-gray-200 text-slate-950 rounded hover:z-10 transition-all duration-300 hover:scale-105`}
                                    >
                                        <img
                                            src={m.img}
                                            alt={m.name}
                                            className="h-36 w-32 sm:h-56 sm:w-52 object-cover"
                                        />
                                        <div className="my-2">
                                            <h1 className="font-semibold">{m.name}</h1>
                                            <p className="text-sm text-neutral-500">{m.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right column of cards */}
                            <div className="relative w-1/2 min-h-[550px]">
                                {teamMembers.slice(3).map((m, i) => (
                                    <div
                                        key={i}
                                        ref={(el) => (rightCardsRef.current[i] = el)}
                                        className={`p-3 absolute left-2 sm:left-5 top-[${i * 140}px] rotate-[8deg] bg-gray-200 text-slate-950 rounded hover:z-10 transition-all duration-300 hover:scale-105`}
                                    >
                                        <img
                                            src={m.img}
                                            alt={m.name}
                                            className="h-36 w-32 sm:h-56 sm:w-52 object-cover"
                                        />
                                        <div className="my-2">
                                            <h1 className="font-semibold">{m.name}</h1>
                                            <p className="text-sm text-neutral-500">{m.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Teams;
