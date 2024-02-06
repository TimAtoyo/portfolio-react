import { Link, Outlet } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Home from "./About";

export default function Navbar() {
  return (
    <>
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <Link to="/" className="ml-3 text-xl font-extrabold">
              Tim Atoyo
            </Link>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link
              to="/projects"
              className="mr-5 text-gray-300 hover:text-white"
            >
              Projects/Work
            </Link>
            <a href="/skills" className="mr-5 text-gray-300 hover:text-white">
              Skills
            </a>
            <a
              href="/testimonials"
              className="mr-5 text-gray-300 hover:text-white"
            >
              Testimonials
            </a>
            <Link
              to="cv"
              className="mr-5 text-gray-300 hover:text-white"
            >
              Cv
            </Link>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-white py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </header>
      <Outlet />
    </>
  );
}
