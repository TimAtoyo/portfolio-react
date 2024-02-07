import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFountPage from './components/NotFoundPage.jsx';
import Cv from './components/Cv.jsx'
import Testimonials from './components/Testimonials.jsx'


const router = createBrowserRouter([
  {
    element:<Navbar />,
    children: [
      {
        path: '/',
        element: <About />,
        errorElement: <NotFountPage />
      },
        {
        path: '/projects',
        element: <Projects />,
        errorElement: <NotFountPage />
      },
        {
        path: '/skills',
        element: <Skills />,
        errorElement: <NotFountPage />
      },
        {
        path: '/testimonials',
        element: <Testimonials />,
      },
        {
        path: '/cv',
        element: <Cv />,
        errorElement: <NotFountPage />
      },
        {
        path: '/hireme',
        element: <Contact />,
        errorElement: <NotFountPage />
      },
    ]
  },

])
function App() {
  return (
    <main>
    {/* <Navbar />
    <About />
    <Projects />
    <Skills />*/}
    <RouterProvider router={router} />
    {/* <Contact />  */}
  </main>
  )
}

export default App
