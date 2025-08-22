import {
  Bot,
  Check,
  FileText,
  HelpCircle,
  BarChart3,
  ClipboardList,
  Languages,
  Cloud
} from "lucide-react"

const Information = () => {
  // map icons according to features
  const features = [
    {
      title: "AI Doubt Solver",
      description: "Students can get instant explanations for any academic question, 24x7 — powered by generative AI.",
      icon: HelpCircle
    },
    {
      title: "Exam Paper Generator",
      description: "Teachers can generate board-level question papers with answer keys in seconds — based on class, subject, and difficulty.",
      icon: FileText
    },
    {
      title: "Quiz Generator",
      description: "Auto-create daily quizzes from any chapter or subject. Boosts retention and tracks student understanding.",
      icon: ClipboardList
    },
    {
      title: "Revision Planner",
      description: "Custom revision timetables tailored to each student's weak areas, syllabus progress, and exam dates.",
      icon: Bot
    },
    {
      title: "Smart Report Cards & Analytics",
      description: "Instant generation of report cards with visual analytics and subject-wise performance insights.",
      icon: BarChart3
    },
    {
      title: "Homework & Assignment Assistant",
      description: "AI helps design meaningful assignments and assists in corrections with suggestions for improvement.",
      icon: ClipboardList
    },
    {
      title: "Multi-Language Support",
      description: "Supports English, Hindi & regional languages — ensuring inclusivity for every student.",
      icon: Languages
    },
    {
      title: "Cloud-Based & Scalable",
      description: "Access the platform from any device, anytime. Scales from a single classroom to full-school rollout.",
      icon: Cloud
    },
  ]

  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between mt-10 gap-6">
        <div className="lg:w-3/4">
          <h1 className="font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight">
            AI-Smart-Class
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg lg:text-xl mt-4 max-w-2xl">
            Revolutionizing K-12 Education with AI-Driven Learning, Doubt Solving, Paper Generation, Revision Tools & More
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 mt-4">
          {["AI", "React", "Automation", "Analytics"].map((tag, i) => (
            <h1
              key={i}
              className="text-center px-3 py-2 bg-neutral-900 rounded-2xl text-sm sm:text-base"
            >
              {tag}
            </h1>
          ))}
        </div>
      </div>

      {/* Banner Image */}
      <div className="my-10">
        <img
          src="https://www.aconite.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg5emh6cg%2Fproduction%2F3dd95321afb236e7113eed31ce7e520d5e4b706f-4000x1960.png&w=1920&q=75"
          alt="AI Smart Class Banner"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>

      {/* About Section */}
      <div className="my-10">
        <h1 className="text-xl sm:text-2xl font-semibold">What is AI-Smart-Class?</h1>
        <div>
          <p className="text-neutral-400 mt-5 leading-relaxed">
            AI-Smart-Class is a cutting-edge platform designed for modern schools, integrating AI-driven educational tools with school management systems to transform how students learn and how teachers teach.
          </p>

          <p className="text-neutral-400 mt-5 leading-relaxed">
            It integrates cutting-edge AI tools into your daily teaching and administrative workflows—offering smart solutions for <strong>doubt solving, exam creation, revision planning, and automated quizzes.</strong>
          </p>

          <p className="text-neutral-400 mt-5 leading-relaxed">
            This platform is not just a tool, it's a complete academic companion for teachers, students, and school administrators, built to improve efficiency, engagement, and outcomes.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {[
            "Fully customizable for your school curriculum.",
            "Seamlessly integrates with your existing academic structure.",
            "Boosts learning outcomes and saves time for teachers."
          ].map((point, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-white h-7 w-7 sm:h-8 sm:w-8 rounded-full shadow">
                <Check color="#0a0a0a" size={18} />
              </div>
              <h1 className="text-sm sm:text-base">{point}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="my-10">
        <h1 className="text-xl sm:text-2xl font-semibold">Key Features for Schools:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 ">
          {features.map((f, idx) => {
            const isFirstRow = idx < 4
            return (
              <div
                key={idx}
                className={`group relative flex flex-col p-6 border-l border-neutral-300 transition-all duration-300 hover:bg-gradient-to-t hover:from-white/10 hover:to-transparent
                ${isFirstRow ? "sm:border-b" : ""}`}
              >
                {/* Left indicator */}
                <div className="h-8 w-1 rounded-r-xl bg-neutral-500 absolute left-0 top-[20%] transition-all duration-300 group-hover:bg-pink-500 group-hover:h-12"></div>

                <f.icon className="text-neutral-500 w-7 h-7 mb-4 transition-transform duration-300 group-hover:scale-110" />

                <h1 className="font-semibold text-lg mb-2 transition-transform duration-300 group-hover:translate-x-2">
                  {f.title}
                </h1>

                <p className="text-sm text-neutral-500 transition-colors duration-300">
                  {f.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Information
