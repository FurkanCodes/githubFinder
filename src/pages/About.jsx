import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            My name is Furkan and this is an app to search for Github Users
          </p>
          <Link to="/" className="btn ">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
