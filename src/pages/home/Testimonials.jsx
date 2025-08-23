import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Greenfield Public School",
      role: "Principal, Mr. Arvind Singh",
      feedback:
        "Working with this EdTech team has been a game-changer for our school. The AI-driven solutions made teaching more interactive and improved student engagement significantly.",
      img: "https://i.pinimg.com/736x/e0/5c/3f/e05c3f0b95a5ec0b1d3461b7449481f2.jpg",
    },
    {
      name: "Sunrise International School",
      role: "Vice Principal, Mrs. Ritu Mehra",
      feedback:
        "We were impressed with how quickly the platform was delivered and how well it integrates with our existing systems. Teachers find it easy to use and parents love the transparency.",
      img: "https://i.pinimg.com/1200x/a3/fd/3d/a3fd3dca4d88db0353ef7e76a8835e33.jpg",
    },
    {
      name: "St. Joseph's Academy",
      role: "Administrator, Mr. Rajeev Kumar",
      feedback:
        "The LMS has helped us track student progress in real time. It has not only improved learning outcomes but also reduced administrative overhead for our staff.",
      img: "https://i.pinimg.com/736x/da/0b/8a/da0b8a73587be2b85df3a6d62ad22f67.jpg",
    },
    {
      name: "Bright Minds High School",
      role: "Head of Department, Mrs. Neha Kapoor",
      feedback:
        "Their support team is outstanding! Even after deployment, they provided continuous assistance, ensuring smooth adoption of the platform across our school.",
      img: "https://i.pinimg.com/736x/c0/53/a4/c053a459238c0d3616915b529745ecc4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef();
  const textRef = useRef();

  // Typing effect (desktop ke liye)
  useGSAP(
    (context) => {
      if (!textRef.current) return;
      context.kill();
      const chars = textRef.current.querySelectorAll("span");
      gsap.set(chars, { opacity: 0 });
      gsap.fromTo(
        chars,
        { opacity: 0, y: -20, filter: "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.01,
          ease: "power2.out",
        }
      );
    },
    { dependencies: [currentIndex], scope: textRef }
  );

  // Image + text animation (desktop ke liye)
  useGSAP(
    (context) => {
      const el = testimonialRef.current;
      if (!el) return;
      context.kill();
      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
    },
    { dependencies: [currentIndex], scope: testimonialRef }
  );

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const t = testimonials[currentIndex];

  return (
    <section className="w-full max-w-6xl mx-auto text-white py-16 px-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-10">
        What Our Partners Say!
      </h1>

      {/* ✅ Mobile scrollable version */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide md:hidden">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 bg-neutral-950 rounded-2xl p-4"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-40 w-full rounded-lg object-cover mb-4"
            />
            <h1 className="font-bold ">{item.name}</h1>
            <h2 className="text-neutral-400 text-xs">{item.role}</h2>
            <p className="text-xs mt-3">{item.feedback}</p>
          </div>
        ))}
      </div>

      {/* ✅ Desktop carousel version */}
      <div
        ref={testimonialRef}
        className="hidden md:flex sm:px-20 flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        <img
          src={t.img}
          alt={t.name}
          className="h-52 w-full sm:h-72 sm:w-72 rounded-2xl object-cover flex-shrink-0"
        />

        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-xl sm:text-2xl">{t.name}</h1>
          <h2 className="text-neutral-400 text-sm sm:text-base">{t.role}</h2>

          <p
            ref={textRef}
            className="font-medium my-6 sm:my-8 text-sm sm:text-base leading-relaxed whitespace-pre-wrap"
          >
            {t.feedback.split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </p>

          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="h-10 w-10 bg-neutral-700 rounded-full flex items-center justify-center hover:rotate-12 transition-all duration-150 cursor-pointer"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 bg-neutral-700 rounded-full flex items-center justify-center hover:rotate-12 transition-all duration-150 cursor-pointer"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
