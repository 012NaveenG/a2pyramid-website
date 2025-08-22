import {
    Bot,
    Check,
    Smile,
    BookOpen,
    Languages,
    Brain,
    Users
} from "lucide-react"

const Information = () => {
    // map icons according to features
    const features = [
        {
            title: "Conversational AI with Human-Like Responses",
            description:
                "Natural voice-based conversations. Understands and answers academic and non-academic queries. Feels like talking to a real mentor or friend.",
            icon: Bot,
        },
        {
            title: "Face-to-Face Interaction (Camera Enabled)",
            description:
                "Ms. Friday can see the student (with camera permission). Detects expressions and adjusts tone or content accordingly.",
            icon: Users,
        },
        {
            title: "Emotional Wellness & Mental Health Support",
            description:
                "Recognizes signs of stress, sadness, or anxiety. Provides comfort through stories, jokes, motivational talks, or calm music.",
            icon: Smile,
        },
        {
            title: "Academic Assistant",
            description:
                "Explains doubts across subjects. Recommends study plans based on performance. Encourages and reminds students of goals.",
            icon: BookOpen,
        },
        {
            title: "Multilingual Support",
            description:
                "Speaks and understands English, Hindi, and regional languages. Designed for students across India and globally.",
            icon: Languages,
        },
        {
            title: "AI-Powered Insights",
            description:
                "Analyzes learning behavior and provides personalized recommendations for students and schools.",
            icon: Brain,
        },
    ]

    return (
        <div className="py-10 px-4 sm:px-8 lg:px-16">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-start justify-between mt-10 gap-6">
                <div className="lg:w-3/4">
                    <h1 className="font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight">
                        Ms. Friday
                    </h1>
                    <p className="text-neutral-400 text-base sm:text-lg lg:text-xl mt-4 max-w-2xl">
                        The Friendly AI Companion for Students
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
                <h1 className="text-xl sm:text-2xl font-semibold">What is Ms. Friday?</h1>
                <p className="text-neutral-400 mt-5 leading-relaxed">
                    Ms. Friday is an AI-powered talking and visual bot designed to support students emotionally and academically. She's not just a chatbot — she's a digital friend who talks, listens, understands emotions, and responds like a caring mentor.
                </p>

                <div className="mt-6 space-y-4">
                    {[
                        "Fully customizable for your school curriculum.",
                        "Seamlessly integrates with your existing academic structure.",
                        "Boosts learning outcomes and saves time for teachers.",
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                    {features.map((f, idx) => {
                        const isFirstRow = idx < 3 // sirf pehle row ke bottom me border
                        return (
                            <div
                                key={idx}
                                className={`group relative flex flex-col p-6 border-l border-neutral-300 transition-all duration-300 hover:bg-gradient-to-t hover:from-white/10 hover:to-transparent ${isFirstRow ? "sm:border-b" : ""
                                    }`}
                            >
                                {/* Left indicator */}
                                <div className="h-8 w-1 rounded-r-xl bg-neutral-500 absolute left-0 top-[20%] transition-all duration-300 group-hover:bg-pink-500 group-hover:h-12"></div>

                                <f.icon className="text-neutral-500 w-7 h-7 mb-4 transition-transform duration-300 group-hover:scale-110" />

                                <h1 className="font-semibold text-lg mb-2 transition-transform duration-300 group-hover:translate-x-2">
                                    {f.title}
                                </h1>

                                <p className="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
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
