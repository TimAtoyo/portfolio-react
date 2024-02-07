import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import NotFountPage from './components/NotFoundPage.jsx';
import Cv from './components/Cv.jsx'
import Testimonials from './components/Testimonials.jsx'


const router = createBrowserRouter([
  {
    element:<Navbar />,
    children: [
      {
        path: '/',
        element: <About />,
        
      },
        {
        path: '/projects',
        element: <Projects />,
        
      },
        {
        path: '/skills',
        element: <Skills />,
 
      },
        {
        path: '/testimonials',
        element: <Testimonials />,
      },
        {
        path: '/cv',
        element: <Cv />,

      },
        {
        path: '/hireme',
        element: <Contact />,
        
      },
    ]
  }

])
function App() {
  return (
    <main>
    <RouterProvider router={router} />
  </main>
  )
}

export default App
