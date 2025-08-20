import { Check, CodeXml, Hash, Pencil, Wrench } from 'lucide-react'

const Services = () => {
  return (
    <section className="w-full sm:w-3/4  mx-auto text-white min-h-screen py-20 px-4">
      <h1 className="font-bold text-5xl sm:text-8xl lg:text-8xl w-[90vw] sm:w-[60%] ">
        Services We Provide For Your Business
      </h1>

      {/* Service one */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 my-20">
        {/* Left Side Text */}
        <div className="flex-1">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-violet-600 flex items-center justify-center mb-6">
            <Pencil size={30} strokeWidth={3} />
          </div>
          <div className="flex gap-5">
            <Hash color="#7f22fe" size={70} strokeWidth={3}  />
            <div>
              <h1 className="font-semibold text-3xl sm:text-5xl lg:text-6xl">Web Design</h1>
              <p className="text-gray-400 mt-3 max-w-md">
                We craft user-focused designs that blend form and function, ensuring every pixel
                guides your customers effortlessly through your product.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Responsive layouts for all devices.",
                  "Intuitive navigation and clear hierarchy.",
                  "Brand-aligned visual systems."
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex items-center justify-center bg-white h-7 w-7 sm:h-8 sm:w-8 rounded-full">
                      <Check color="#0a0a0a" size={18} />
                    </div>
                    <h1 className="text-sm sm:text-base">{point}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <img src="/services_1.avif" alt="Web Design" className="w-3/4 max-w-sm sm:max-w-md rounded-xl shadow-lg" />
        </div>
      </div>

      {/* Service two */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 my-20">
        {/* Left Side Image */}
        <div className="flex-1 flex justify-center">
          <img src="/services_2.avif" alt="Development" className="w-3/4 max-w-sm sm:max-w-md rounded-xl shadow-lg" />
        </div>

        {/* Right Side Text */}
        <div className="flex-1">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-violet-600 flex items-center justify-center mb-6">
            <CodeXml size={30} className="sm:size-35" />
          </div>
          <div className="flex gap-5">
            <Hash color="#7f22fe" size={70} strokeWidth={3}  />
            <div>
              <h1 className="font-semibold text-3xl sm:text-5xl lg:text-6xl">Development</h1>
              <p className="text-gray-400 mt-3 max-w-md">
                Our engineers build scalable, maintainable applications using best-in-class technologies,
                delivering fast performance and rock-solid reliability.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Clean, modular codebase.",
                  "Automated testing & CI/CD.",
                  "API-driven architecture."
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex items-center justify-center bg-white h-7 w-7 sm:h-8 sm:w-8 rounded-full">
                      <Check color="#0a0a0a" size={18} />
                    </div>
                    <h1 className="text-sm sm:text-base">{point}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service three */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 my-20">
        {/* Left Side Text */}
        <div className="flex-1">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-violet-600 flex items-center justify-center mb-6">
            <Wrench size={30} strokeWidth={3} />
          </div>
          <div className="flex gap-5">
            <Hash color="#7f22fe" size={70} strokeWidth={3}  />
            <div>
              <h1 className="font-semibold text-3xl sm:text-5xl lg:text-6xl">Maintenance</h1>
              <p className="text-gray-400 mt-3 max-w-md">
                We keep your software running smoothly with proactive monitoring, security updates,
                and feature enhancements—so you never miss a beat.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "24/7 performance monitoring.",
                  "Regular security patches.",
                  "Priority support & updates."
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex items-center justify-center bg-white h-7 w-7 sm:h-8 sm:w-8 rounded-full">
                      <Check color="#0a0a0a" size={18} />
                    </div>
                    <h1 className="text-sm sm:text-base">{point}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <img src="/services_3.avif" alt="Maintenance" className="w-3/4 max-w-sm sm:max-w-md rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default Services
