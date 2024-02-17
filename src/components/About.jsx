import React from 'react'
import headshot from '../assets/headshot.png'
import { Link } from 'react-router-dom'
function About() {
  return (
    <section  className='flex justify-center'>
      <div className="container  justify-around flex gap-10 flex-row-reverse  py-0 md:flex-row:flex-col items-center sm:flex-nowrap flex-wrap">
        <div className="lg:flex-grow md:w-1/2 order-last sm:order-first lg:pr-24 md:pr-16 flex flex-col md:items-start text-left mb-12 md:mb-0 ">
          <h1 className="title-font text-3xl md:text-3xl lg:text-7xl mb-4 font-extrabold text-transparent text-blue-800 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500">
            Hi, I'm NazarineBeats.
          </h1>
          <h2 className=" lg:inline-block text-sm  sm:text-4xl mb-4 font-bold">I love to build.</h2>
          <p className="mb-8 leading-relaxed">
        Renowned for crafting visually captivating experiences for industry leaders such as Costa and Microsoft. I excel in exceeding client expectations. Join me in transforming your story into a captivating digital narrative—a journey where pixels transcend boundaries and digital experiences become timeless masterpieces.
          </p>
          <div className="flex justify-center">
            <Link
              to="/hireme"
              className="inline-flex focus:outline-nonerounded text-lg bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Work With Me
            </Link>
            <Link
              to="projects"
              className="ml-4 inline-flex focus:outline-nonerounded text-lg bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-800 rounded">
              See My Past Projects
            </ Link>
          </div>
        </div>
        <div className="sm:items-center  items-start lg:max-w-lg lg:w-full md:w-1/2  md:grid-cols-2" >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={headshot}
          />
        </div>
      </div>
    </section>
  )
}

export default About
