import React from "react";
import { Theme } from "react-daisyui";
import pierre from "../assets/fullPierre.jpg";

function Notfound() {
  return (
    <div class=" relative overflow-hidden h-screen w-screen">
      <img src={pierre} class="absolute object-cover sm:object-scale-down" />

      <div class="container mx-auto px-6 relative z-10 flex items-center  pt-48 lg:pt-96">
        <div class="w-full flex flex-col items-center relative z-10">
             
          <h1 class="font-extrabold text-center text-black leading-tight sm:text-base lg:text-neutral-content  ">
            This page is gone in time, like tears in a rain
          </h1>
             
          <p className="font-extrabold text-7xl text-black animate-bounce leading-tight  lg:text-neutral-content  ">
            404
          </p>
        </div>
         
      </div>
    </div>
  );
}

export default Notfound;
