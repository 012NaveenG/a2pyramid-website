import React from "react"
import { useNavigate } from "react-router-dom"

const Projects = () => {
    const navigate = useNavigate()
    return (
        <section className="bg-white min-h-screen py-10">
            <div className="w-11/12 sm:w-3/4 mx-auto">
                {/* Title Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold sm:w-3/4 leading-tight">
                        Our Selected Works Worth Taking a Look
                    </h1>
                    <img
                        src="/project_title_img.avif"
                        alt="project_title_img"
                        className="h-24 sm:h-36 hidden sm:block"
                    />
                </div>

                {/* Project Section */}
                <div
                    onClick={() => navigate('/project/ai-smart-class')}
                    className="flex flex-col md:flex-row p-2 rounded-md justify-center gap-6 w-full mt-10 hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:scale-105">
                    {/* Left Image */}
                    <img
                        src="/ai_smart_class.jpg"
                        alt="AI Smart Class"
                        className="w-full md:w-1/2 h-64 sm:h-88 object-cover rounded-md"
                    />

                    {/* Right Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        {/* Title Image + Number */}
                        <div className="flex  justify-between mb-5">
                            <img
                                src="/ai_smart_class_title_img.jpg"
                                alt="ai_smart_class_title"
                                className="h-20 w-20 sm:h-24 sm:w-24 rounded-md object-cover"
                            />
                            <p className="font-semibold text-lg sm:text-xl text-violet-800">
                                001
                            </p>
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl sm:text-6xl font-semibold mb-3">
                            AI-Smart-Class
                        </h1>

                        {/* Description */}
                        <p className="text-slate-500 text-sm sm:text-base md:w-3/4">
                            AI-Smart-Class is a cutting-edge platform designed for modern
                            schools, integrating AI-driven educational tools with school
                            management systems to transform how students learn and how teachers
                            teach.
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            <span className="bg-slate-200 px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                                AI-Powered
                            </span>
                            <span className="bg-slate-200 px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                                School-Focused
                            </span>
                            <span className="bg-slate-200 px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                                Future-Ready
                            </span>
                        </div>
                    </div>
                </div>


                <div
                    onClick={() => navigate('/project/iot_ms_friday')}
                    className="flex flex-col md:flex-row p-2 rounded-md justify-center gap-6 w-full mt-10 hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:scale-105">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        {/* Title Image + Number */}
                        <div className="flex  justify-between mb-5">
                            <img
                                src="/iot_with_ms_friday_title_img.jpg"
                                alt="ai_smart_class_title"
                                className="h-20 w-20 sm:h-24 sm:w-24 rounded-md object-cover"
                            />
                            <p className="font-semibold text-lg sm:text-xl text-violet-800">
                                002
                            </p>
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl sm:text-6xl font-semibold mb-3">
                            IoT with MS Friday

                        </h1>

                        {/* Description */}
                        <p className="text-slate-500 text-sm sm:text-base md:w-3/4">
                            Ms. Friday is an AI-powered talking and visual bot designed to support students emotionally and academically. She's not just a chatbot — she's a digital friend who talks, listens, understands emotions, and responds like a caring mentor.
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            <span className="bg-slate-200 px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                                Conversational AI with Human-Like Responses
                            </span>
                            <span className="bg-slate-200 px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                                Academic Assistant
                            </span>
                            <span className="bg-slate-200 px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                                Multilingual Support
                            </span>
                        </div>
                    </div>

                    {/* Right Image */}
                    <img
                        src="/iot_with_ms_friday.jpg"
                        alt="AI Smart Class"
                        className="w-full md:w-1/2 h-64 sm:h-88 object-contian rounded-md"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
