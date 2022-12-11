import React from "react";
import { FaGithub, FaHouseUser, FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import ThemeDrop from "./ThemeDrop";
import GithubContext from "../../context/github/GithubContext";

function Navbar({ title }) {
  const { dispatch } = useContext(GithubContext);
  return (
    <nav className="navbar mb-12 bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
            to="/"
            className="text-lg font-bold align-middle hover:bg-neutral-focus"
          >
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              to="/"
              onClick={() => dispatch({ type: "CLEAR_USERS" })}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              <FaHouseUser className="inline pr-2 text-3xl" />
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              <FaAddressCard className="inline pr-2 text-3xl" /> About
            </Link>
            <ThemeDrop />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Gitinder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
