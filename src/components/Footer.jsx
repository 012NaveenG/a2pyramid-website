import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="min-h-[70vh] text-white px-4">
      <div className="sm:w-3/4 mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3">

        <div >
          <div className=" border-b border-neutral-700 pb-3 my-5">
            <h1 className="font-semibold">Company</h1>
          </div>
          <div>
            <Link
              to={'/about'}
              className="text-slate-300  hover:text-slate-100 transition-all duration-200"
            >About</Link>
          </div>
          <div>
            <Link
              to={'/services'}
              className="text-slate-300  hover:text-slate-100 transition-all duration-200"
            >Services</Link>
          </div>
          <div>
            <Link
              to={'https://a2pyramid.com/#/edutech/about'}
              className="text-slate-300 "
            >Courses</Link>
          </div>
        </div>
        <div >
          <div className=" border-b border-neutral-700 pb-3 my-5">
            <h1 className="font-semibold">Customer</h1>
          </div>
          <div>
            <Link
              to={'#'}
              className="text-slate-300 hover:text-slate-100 transition-all duration-200 "
            >Contact</Link>
          </div>
          <div>
            <Link
              to={'#'}
              className="text-slate-300 hover:text-slate-100 transition-all duration-200 "
            >Terms & Conditions</Link>
          </div>
          <div>
            <Link
              to={'#'}
              className="text-slate-300 hover:text-slate-100 transition-all duration-200 "
            >Privacy Policy</Link>
          </div>
        </div>
        <div >
          <div className=" border-b border-neutral-700 pb-3 my-5">
            <h1 className="font-semibold">Contacts</h1>
          </div>
          <div>
            <Link
              to={'#'}
              className="text-slate-300 hover:text-slate-100 transition-all duration-200 "
            >LinkedIn</Link>
          </div>
          <div>
            <Link
              to={'#'}
              className="text-slate-300 hover:text-slate-100 transition-all duration-200 "
            >Twiiter</Link>
          </div>
          <div>
            <Link
              to={'#'}
              className="text-slate-300 hover:text-slate-100 transition-all duration-200 "
            >Facebook</Link>
          </div>
          <p className="text-slate-300 ">+91 9472994483</p>
          <p className="text-slate-300 ">+91 9608049406</p>
          <p className="text-slate-300 ">studypyramid@gmail.com</p>
        </div>
      </div>
      <div className="sm:w-3/4 mx-auto mt-10">
        <h1 className="font-bold text-3xl sm:text-4xl ">© 2025 A<sub>2</sub>Pyramid</h1>
        <h1 className="font-bold text-3xl sm:text-4xl ">All rights reserved.</h1>
      </div>
    </footer>
  )
}

export default Footer
