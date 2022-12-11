import React from "react";
import { FaReact } from "react-icons/fa";

function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Gitinder V.1</h1>
          <p className="py-6">
            A Simple Gitgub Profile Finder that fetches users':
          </p>
          <ol className="list-disc">
            <li>Repos</li>
            <li>Bios</li>
            <li>Details of their profiles and much more</li>
          </ol>
          <h1 className="text-4xl font-bold mt-9">Built by:</h1>
          <div className="flex justify-evenly">
            <FaReact className="text-5xl" />
            <p className="pt-5">Tailwind</p>

            <p className="pt-5">and DaisyUI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
