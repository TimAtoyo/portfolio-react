import React from 'react'
import headshot from '../assets/headshot.png'
import { Link } from 'react-router-dom'
function About() {
  return (
    <section >
      <div className="container mx-auto flex gap-10 flex-row-reverse  py-0 md:flex-row:flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-800  ">
            Hi, I'm NazarineBeats.
          </h1>
          <h2 className="hidden lg:inline-block text-sm  sm:text-4xl mb-4 font-bold">I love to build.</h2>
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
