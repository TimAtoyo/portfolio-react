import React from "react";
import { CodeBracketIcon as CodeIcon } from "@heroicons/react/24/solid";
import projects from "../data/projects";

function Projects() {
  return (
    <div>
      <section id="projects" className="text-gray-400 bg-white body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-20">
          <div className="flex flex-col w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-purple-400">
              Check out my latest Apps
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Click one one of the images bellow to see the repo or the deployed
              App!
            </p>
          </div>
          <div className="my-6 mx-1 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 ">
            {projects.map((project) => (

              <a
                href={projects.link}
                key={project.subtitle}
                className=" bg-gray-800 w-100 mx-2 flex flex-col rounded-xl p-3 shadow-lg hover:shadow-xl"
              >
                <div className="rounded-xl">
                  <img 
                  className="object-cover object-center"
                  alt="gallery"
                  src={project.image} />
                </div>

                <div className="mt-1 flex flex-1 flex-col rounded-xl">
                  <div className="px-8 py-10  w-full h-full border-purple-400 bg-gray-900 transition duration-300 ease-in-out opacity-1 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-blue-100">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
