"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const teamMembers = [
    { name: "Aditya Apurv", role: "CEO, A2 Pyramid", img: "/teams/aditya.avif" },
    { name: "Satish Kumar", role: "CTO, A2 Pyramid", img: "/teams/satish.avif" },
    { name: "Keshav Nair", role: "COO, A2 Pyramid", img: "/teams/kesav.avif" },
    { name: "Ankit Dwivedi", role: "Full-Stack Developer", img: "/teams/ankit.avif" },
    { name: "Yuvraj Maheshwari", role: "ML / Web Dev", img: "/teams/yuvraj.avif" },
    { name: "Sanya Gupta", role: "ML Intern", img: "/teams/sanya.jpg" },
];

const Teams = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    // ✅ Responsive check
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                    gsap.to(card, { x: 0, scale: 1, opacity: 1, zIndex: 3, duration: 0.6, ease: "power3.out" });
                } else if (isPrev) {
                    gsap.to(card, { x: -150, scale: 0.8, opacity: 0.6, zIndex: 2, duration: 0.6, ease: "power3.out" });
                } else if (isNext) {
                    gsap.to(card, { x: 150, scale: 0.8, opacity: 0.6, zIndex: 2, duration: 0.6, ease: "power3.out" });
                } else {
                    gsap.to(card, { x: 0, scale: 0.5, opacity: 0, zIndex: 0, duration: 0.6, ease: "power3.out" });
                }
            });
        }
    }, [index, isDesktop]);

    return (
        <section className="w-full text-white py-16 px-4 bg-gradient-to-b from-teal-500 to-teal-700">
            <div className="max-w-6xl mx-auto md:flex  justify-center">
                <div className="mb-10  md:w-1/2">
                    <h1 className="font-bold text-3xl sm:text-8xl">
                        Meet Our Team That Delivers Your Results
                    </h1>
                    <p className="font-semibold text-sm sm:text-base mt-4 lg:w-[70%] ">
                        Our architects, designers, and engineers work together to turn your ideas into powerful software.
                        From concept to ongoing support, we’re committed to your success.
                    </p>
                </div>

                {/* 🔹 Mobile → Carousel */}
                {!isDesktop && (
                    <div className="relative flex items-center justify-center w-full h-[220px] overflow-hidden">
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
                )}

                <div className="w-1/2">
                    {/* 🔹 Desktop → Static Grid (2 cards per row) */}
                    {isDesktop && (
                        <div className="grid grid-cols-3 gap-8 ">
                            {teamMembers.map((m, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-200 text-slate-950 rounded-lg shadow-md hover:scale-105 transition-all duration-300 p-4 text-center"
                                >
                                    <img
                                        src={m.img}
                                        alt={m.name}
                                        className="h-42 w-full object-cover rounded"
                                    />
                                    <div className="mt-3">
                                        <h1 className="font-semibold text-lg">{m.name}</h1>
                                        <p className="text-sm text-neutral-500">{m.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Teams;
