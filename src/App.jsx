import { useState } from 'react'
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
        children: [
          
        ]
      },
        {
        path: '/skills',
        element: <Skills />
      },
        {
        path: '/testimonials',
        element: <Testimonials />
      },
        {
        path: '/cv',
        element: <Cv />
      },
        {
        path: '/hireme',
        element: <Contact />
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
