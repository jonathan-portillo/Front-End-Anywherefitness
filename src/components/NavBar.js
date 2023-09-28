import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function NavBar(props) {
  const toggleMode = (e) => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };

  const history = useHistory();

  const isAuthenticated = localStorage.getItem("token");

  return (
    <div className="navbarbackground">
      <div className="navbar">
        <h1 className="title">Anywhere Fitness</h1>
        <ul>
          {isAuthenticated ? (
            <>
              <li className="link" onClick={props.handleLogout}>
                Logout
              </li>
            </>
          ) : (
            <>
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/login">
                Login
              </Link>
              <Link className="link" to="/signup">
                SignUp
              </Link>
            </>
          )}
        </ul>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={props.darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
      </div>
    </div>
  );
}
