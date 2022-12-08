import React from "react";

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
          <a href="/" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
