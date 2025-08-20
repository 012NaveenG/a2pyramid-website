
const defaultBrands = [
    { src: "/marque_1.avif", alt: "img" },
    { src: "/marque_2.avif", alt: "img" },
    { src: "/marque_3.avif", alt: "img" },
    { src: "/marque_4.avif", alt: "img" },
    { src: "/marque_5.avif", alt: "img" },
    { src: "/marque_6.avif", alt: "img" }
];

const BrandsMarquee = ({ brands = defaultBrands, speed = 22 }) => {
    // list ko duplicate karte hain taaki loop smooth lage
    const items = [...brands, ...brands];

    return (
        <div className="relative w-full overflow-hidden  py-10 mt-5">
           

            {/* scrolling track */}
            <div
                className="flex w-max gap-10 items-center marquee-track hover:[animation-play-state:paused]"
                style={{ animationDuration: `${speed}s` }}
            >
                {items.map((b, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center shrink-0"
                        aria-label={b.alt}
                        title={b.alt}
                    >
                        {b.src ? (
                            <img
                                src={b.src}
                                alt={b.alt}
                                className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
                                loading="lazy"
                            />
                        ) : (
                            <span className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 text-sm sm:text-base">
                                {b.label || b.alt}
                            </span>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default BrandsMarquee;
