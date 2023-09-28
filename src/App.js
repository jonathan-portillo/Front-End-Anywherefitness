import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import "./App.css";
import useDarkMode from "./components/useDarkMode";
import NavBar from "./components/NavBar";
import InstructorHome from "./components/Instructor/InstructorHome";
import ClientHome from "./components/client/ClientHome";
import ScheduledClasses from "./components/client/ScheduledClasses";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );

  const history = useHistory();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    history.push("/");
  };

  return (
    <div className={darkMode ? "dark-mode app" : "app"}>
      <NavBar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route component={User} path="/user" />

        <Route path="/login">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </Route>

        <Route path="/signup">
          <Register setIsAuthenticated={setIsAuthenticated} />
        </Route>

        <Route path="/instructor">
          <InstructorHome />
        </Route>

        <Route path="/client/dashboard">
          <ClientHome />
        </Route>

        <Route path="/client/registered-classes">
          <ScheduledClasses />
        </Route>
      </Switch>
    </div>
  );
}
