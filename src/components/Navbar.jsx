import { Link } from "react-router-dom"
import { useState } from "react"
import { CornerDownRight, Menu, X } from "lucide-react" // hamburger icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { path: "/services", label: "Services" },
        { path: "/pricing", label: "Pricing" },
        { path: "/courses", label: "Courses" }
    ]

    return (
        <nav className="fixed top-0 bg-transparent w-full z-50">
            <div className="flex items-center justify-between px-6 py-4 sm:w-3/4 mx-auto text-white">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-1"
                    >
                        <h1 className="italic font-mono">
                            A<sub>2</sub>Pyramid
                        </h1>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="relative group"
                        >
                            {link.label}
                            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                <div>
                    <Link
                        to={"/contact-us"}
                        className="hidden sm:flex relative group  items-center justify-center gap-1"
                    >
                        Contact Us <CornerDownRight />
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>



            {/* Mobile Menu */}
            <div
                className={`
                    bg-[url('/navbar_mobile_bg_img.jpg')] bg-cover bg-center
          fixed top-15 right-0 h-full w-full bg-slate-100 flex flex-col gap-6 py-8 px-6 shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >


                {/* Menu Links */}
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="relative group  text-white text-5xl font-semibold"
                    >
                        {link.label}
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}


                <Link
                    to={"/contact-us"}
                    className=" relative group text-white text-5xl font-semibold"
                >
                    Contact Us
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <div className="flex items-center justify-between  text-white mt-25">
                    <div >
                        <h1 className="font-extralight text-sm">WORK EMAIL</h1>
                        <p className="text-sm font-semibold">studypyramid@gmail.com</p>
                    </div>
                    <div >
                        <h1 className="font-extralight text-sm">PHONE</h1>
                        <p className="text-sm font-semibold">+91 9472994483</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <Link
                        to={"#"}
                        className="px-2 py-1 rounded-2xl border-2 border-white text-white"
                    >LinkedIn</Link>
                    <Link
                        to={"#"}
                        className="px-2 py-1 rounded-2xl border-2 border-white text-white"
                    >Facebook</Link>
                    <Link
                        to={"#"}
                        className="px-2 py-1 rounded-2xl border-2 border-white text-white"
                    >Twitter</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
