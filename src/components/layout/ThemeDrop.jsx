import React from "react";
import { useContext } from "react";
import ThemeContext from "../../context/theme/ThemeContext";

function ThemeDrop() {
  const { theme, setDark, setCyberpunk, setRetro } = useContext(ThemeContext);
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-sm rounded-btn ">
        Click
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-content rounded-box w-52"
      >
        <li>
          <a onClick={setDark}>Dark Theme</a>
        </li>
        <li>
          <a onClick={setCyberpunk}>Cyberpunk THeme</a>
        </li>
        <li>
          <a onClick={setRetro}>Retro THeme</a>
        </li>
      </ul>
    </div>
  );
}

export default ThemeDrop;
