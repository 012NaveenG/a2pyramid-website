import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

const HomeLayout = () => {
    return (
        <div >
            <Navbar />
            <main className="min-h-screen mt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout
