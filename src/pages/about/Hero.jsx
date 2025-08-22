import { Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-16">
      <div className="flex flex-col md:flex-row  gap-10">
        
        {/* Left content */}
        <div className="w-full md:w-1/2 sm:text-center md:text-left">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-snug">
            Your Trusted EdTech Partner with{" "}
            <span className="text-violet-600">3 Years</span> of Expertise
          </h1>
          <p className="text-neutral-400 mt-5 font-medium text-sm sm:text-base lg:text-lg">
            With years of experience, our EdTech platform is dedicated to fostering
            meaningful educational journeys and lifelong learning. We strive to
            make education accessible, engaging, and impactful through innovative
            approaches.
          </p>

          {/* Bullet Points */}
          <div className="mt-8 space-y-4">
            {[
              "Professional teams.",
              "24/7 Support.",
              "Fair Pricing.",
            ].map((point, idx) => (
              <div key={idx} className="flex items-center  md:justify-start gap-3">
                <div className="flex items-center justify-center bg-white h-7 w-7 sm:h-8 sm:w-8 rounded-full">
                  <Check color="#0a0a0a" size={18} />
                </div>
                <h1 className="text-sm sm:text-base lg:text-lg">{point}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Right content - hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src="/about/about_hero.avif"
            alt="hero_img"
            className="h-64 sm:h-80 lg:h-96 w-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
