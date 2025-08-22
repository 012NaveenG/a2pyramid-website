const Domains = () => {
    return (
        <section className="min-h-screen px-4 py-10">
            <h1 className="text-center font-bold text-3xl sm:text-5xl lg:text-6xl">
                Domains We Work
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-10">
                {[
                    { img: "/about/data_science.jpg", title: "Data Science" },
                    { img: "/about/mern_stack.jpg", title: "MERN Stack Development" },
                    { img: "/about/ai_ml.jpg", title: "AI/ML" },
                    { img: "/about/data_analytics.jpg", title: "Data Analytics" },
                    { img: "/about/quality_assurance.jpg", title: "Quality Assurance" },
                    { img: "/about/devops.jpg", title: "DevOps" },
                    // { img: "/about/webdev.jpg", title: "Web Development" },
                ].map((domain, idx) => (
                    <div
                        key={idx}
                        className="p-3 sm:p-4 hover:scale-105 transition-transform duration-200"
                    >
                        <img
                            src={domain.img}
                            alt={domain.title}
                            className="h-40 sm:h-56 lg:h-64 w-full rounded-xl border-2 border-violet-600 object-cover"
                        />
                        <h1 className="text-sm sm:text-xl lg:text-2xl text-center my-3 sm:my-5">
                            {domain.title}
                        </h1>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Domains;
