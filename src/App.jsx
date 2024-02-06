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
        element: <Projects />
      },
        {
        path: '/skills',
        element: <Skills />
      },
        {
        path: '/cv',
        element: <Cv />
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
    <Skills />
    <Contact /> */}
    <RouterProvider router={router} />
  </main>
  )
}

export default App
