import React from "react";
import spinner from "../assets/spin.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20 h-screen">
      <img
        width={180}
        className="text-center mx-auto"
        src={spinner}
        alt="Loading"
      />
    </div>
  );
}

export default Spinner;
