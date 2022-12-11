import React from "react";
import { useContext } from "react";
import ThemeContext from "../../context/theme/ThemeContext";

function ThemeDrop() {
  const {
    setDark,
    setCyberpunk,
    setRetro,
    setBlack,
    setWireframe,
    setSynthwave,
    setLight,
  } = useContext(ThemeContext);
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-sm rounded-btn  gap-1  ">
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block  h-4 w-4 stroke-current md:h-6 md:w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
        themes
        <svg
          width="12px"
          height="12px"
          className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-neutral-focus rounded-box w-52"
      >
        <li>
          <a onClick={setDark}>Dark </a>
        </li>
        <li>
          <a onClick={setLight}>Light </a>
        </li>
        <li>
          <a onClick={setCyberpunk}>Cyberpunk </a>
        </li>
        <li>
          <a onClick={setRetro}>Retro </a>
        </li>
        <li>
          <a onClick={setBlack}>Black </a>
        </li>
        <li>
          <a onClick={setWireframe}>Wireframe </a>
        </li>
        <li>
          <a onClick={setSynthwave}>Synthwave </a>
        </li>
      </ul>
    </div>
  );
}

export default ThemeDrop;
