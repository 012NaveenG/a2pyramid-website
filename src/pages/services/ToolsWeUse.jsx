const ToolsWeUse = () => {
    const tools = [
        { src: "/tools/figma.avif", alt: "Figma", description: "UI/UX design tool for wireframes, prototypes, and design collaboration." },
        { src: "/tools/firebase.avif", alt: "Firebase", description: "Backend-as-a-service providing database, authentication, hosting, and analytics." },
        { src: "/tools/express-js-dark.avif", alt: "Express.js", description: "Minimalist Node.js framework for building fast and scalable APIs." },
        { src: "/tools/node-js.png", alt: "Node.js", description: "JavaScript runtime environment for building server-side applications." },
        { src: "/tools/next-js-dark.avif", alt: "Next.js", description: "React framework with SSR, API routes, and fast production builds." },
        { src: "/tools/react.avif", alt: "React", description: "JavaScript library for building interactive and component-based UIs." },
        { src: "/tools/vercel-dark.avif", alt: "Vercel", description: "Hosting platform optimized for frontend frameworks and serverless functions." },
        { src: "/tools/typescript.avif", alt: "TypeScript", description: "Superset of JavaScript that adds static typing for better code quality." },
        { src: "/tools/tailwind.avif", alt: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development." },
    ];

    return (
        <div className="relative w-full overflow-hidden py-10 mt-5">
            {/* marquee track */}
            <div className="flex w-max gap-6 items-stretch animate-marquee hover:[animation-play-state:paused]">
                {tools.map((t, i) => (
                    <div
                        key={i}
                        className="relative w-42 sm:w-72
                       bg-slate-100 cursor-context-menu rounded-xl shadow-md p-6
                       flex flex-col items-center justify-start
                       transition-transform duration-300 hover:scale-105 group"
                    >
                        <img src={t.src} alt={t.alt} className="h-16 w-16 object-contain" />
                        <h1 className="font-semibold text-lg sm:text-xl text-center mt-4">
                            {t.alt}
                        </h1>

                        {/* reserve fixed space so layout doesn't shift */}
                        <div className="mt-3 hidden  min-h-[60px] sm:flex items-center justify-center">
                            <p
                                className="opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500 text-sm text-center text-neutral-600"
                            >
                                {t.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ToolsWeUse;
