const Hero = () => {
    return (
        <section className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden">
            {/* Background Video */}
            <video
                src="https://videos.pexels.com/video-files/6498238/6498238-uhd_2560_1440_25fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Overlay Layer (dark filter for text visibility) */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                    Ms. Friday
                </h1>
                <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl">
                    The Friendly AI Companion for Students
                </p>

            </div>
        </section>
    );
};

export default Hero;
