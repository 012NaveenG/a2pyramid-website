import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQs = () => {
    const faqs = [
        {
            question: "What kind of products do you build for schools?",
            answer: "We build AI-driven learning management systems, smart exam portals, and personalized student learning dashboards that improve engagement and simplify administration."
        },
        {
            question: "How does AI help teachers in daily teaching?",
            answer: "Our platform provides automated question generation, real-time student performance tracking, and personalized recommendations, reducing the teachers' workload."
        },
        {
            question: "Is your platform easy to integrate with existing school systems?",
            answer: "Yes! Our solutions are built with flexibility in mind and can integrate smoothly with existing ERP or LMS systems used by schools."
        },
        {
            question: "Do you provide training and support after deployment?",
            answer: "Absolutely. We offer onboarding sessions for teachers, staff, and administrators along with dedicated support even after the product goes live."
        },
        {
            question: "How secure is student data on your platform?",
            answer: "We follow strict data protection policies with encryption, role-based access, and compliance with international standards to keep student and school data secure."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full sm:w-3/4 mx-auto text-white  py-10 px-4">
            <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12">
                Frequently Asked Questions
            </h1>

            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className=" sm:w-3/4 mx-auto bg-neutral-900 border border-neutral-700 rounded-xl p-2 sm:p-4 shadow-lg"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left"
                        >
                            <span className="text-sm sm:text-lg font-semibold">{faq.question}</span>
                            <ChevronDown
                                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            className={`mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-40" : "max-h-0"
                                }`}
                        >
                            {openIndex === index && <p>{faq.answer}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQs;
