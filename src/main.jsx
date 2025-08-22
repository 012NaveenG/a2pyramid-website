import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import HomeLayout from './layout/HomeLayout.jsx'
import About from './pages/about/About.jsx'
import Services from './pages/services/Services.jsx'
import AIsmartClass from './pages/projects/ai_smart_class/AIsmartClass.jsx'
import IoT_Ms_Friday from './pages/projects/iot_ms_friday/IoT_Ms_Friday.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/project/ai-smart-class",
        element: <AIsmartClass/>
      },
      {
        path: "/project/iot_ms_friday",
        element: <IoT_Ms_Friday/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
