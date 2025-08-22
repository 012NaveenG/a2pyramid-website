import { 
  CodeXml, 
  Smartphone, 
  CloudCog, 
  Brain, 
  ShieldCheck, 
  Database, 
  BarChart3 
} from "lucide-react";

const AllServices = () => {
  const services = [
    {
      title: "Full Stack Development",
      description: "Crafting dynamic, responsive web applications with modern technologies.",
      icon: CodeXml
    },
    {
      title: "Mobile App Development",
      description: "Building intuitive, high-performance apps for both Android and iOS.",
      icon: Smartphone
    },
    {
      title: "DevOps",
      description: "Streamlining development and operations with CI/CD pipelines and automation.",
      icon: CloudCog
    },
    {
      title: "AI / Machine Learning",
      description: "Leveraging AI/ML to create intelligent, data-driven solutions.",
      icon: Brain
    },
    {
      title: "Quality Assurance",
      description: "Ensuring robust, bug-free products with thorough testing practices.",
      icon: ShieldCheck
    },
    {
      title: "Data Science",
      description: "Turning raw data into actionable insights with advanced models.",
      icon: Database
    },
    {
      title: "Data Analytics",
      description: "Analyzing trends and metrics to drive business decision-making.",
      icon: BarChart3
    },
  ];

  return (
    <section className="w-full px-4 py-12 sm:py-20">
      <h1 className="font-bold text-3xl text-center mt-6 sm:mt-10 leading-tight">
        Our Signature Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        {services.map((s, idx) => {
          // pehle row (sirf first 4 items) ke liye bottom border lagana hai
          const isFirstRow = idx < 4;
          return (
            <div 
              key={idx}
              className={`
                group relative flex items-center justify-center 
                border-l border-neutral-300 
                p-6 cursor-pointer 
                transition-all duration-300 
                hover:bg-gradient-to-t hover:from-white/10 hover:to-transparent
                ${isFirstRow ? "sm:border-b" : ""}
              `}
            >
              {/* Left indicator bar */}
              <div className="h-8 w-1 rounded-r-xl bg-neutral-500 absolute left-0 top-[35%] 
                              transition-all duration-300 group-hover:bg-pink-500 group-hover:h-12"></div>

              <div className="transition-all duration-300">
                <s.icon className="text-neutral-500 w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                
                <h1
                  className="font-semibold text-lg my-5 
                             transition-transform duration-300 ease-in-out 
                             group-hover:translate-x-2"
                >
                  {s.title}
                </h1>

                <p className="text-sm text-neutral-500 transition-colors duration-300">
                  {s.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllServices;
