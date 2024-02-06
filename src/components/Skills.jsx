import { CheckBadgeIcon as ChipIcon, CheckIcon as BadgeCheckIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-blue-800 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
           These are my current skills, im always learning so this is likely to increase in the near future.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/3 w-full">
              <div className="bg-blue-500 border-b-4 border-blue-900 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-300 font-extrabold w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

