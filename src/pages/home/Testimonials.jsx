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
            img: "https://i.pinimg.com/736x/a2/fa/c5/a2fac53dd00e999f40abee49bbc2e774.jpg",
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

    return (
        <section className="w-full sm:w-3/4 mx-auto text-white min-h-screen py-20 px-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-center mb-12">
                What Our Partner Schools Say
            </h1>

            <div className="grid gap-8 sm:grid-cols-2">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={t.img}
                                alt={t.name}
                                className="h-14 w-14 rounded-full object-cover border-2 border-violet-600"
                            />
                            <div>
                                <h2 className="font-semibold text-lg">{t.name}</h2>
                                <p className="text-gray-400 text-sm">{t.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 italic">“{t.feedback}”</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
