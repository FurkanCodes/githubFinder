import React from "react";
import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <span className="flex items-start mb-4 space-x-1">
        {alert.type === "error" && (
          <img
            className="w-6 h-6 flex-none mt-0.5 "
            src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"
            alt=""
          />
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-base-content">
          <strong>{alert.msg}</strong>
        </p>
      </span>
    )
  );
}

export default Alert;
