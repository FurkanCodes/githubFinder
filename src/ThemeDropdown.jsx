import React from "react";
import { useState } from "react";

function ThemeDropdown({ handleClick, setCyberpunk, setRetro }) {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Click
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button onClick={handleClick}>Dark Theme</button>
        </li>
        <li>
          <button onClick={setCyberpunk}>Cyberpunk Theme</button>
        </li>
        <li>
          <button onClick={setRetro}>Retro Theme</button>
        </li>
      </ul>
    </div>
  );
}

export default ThemeDropdown;
