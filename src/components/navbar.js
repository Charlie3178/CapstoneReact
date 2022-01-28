import React from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeclassname="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeclassname="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/view" activeclassname="nav-link-active">
            View ALL Character Sheets
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/create" activeclassname="nav-link-active">
            Create
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <a
            href="http://web.mit.edu/dvp/Public/butters-lululu.pdf"
            activeclassname="nav-link-active"
          >
            PHB 3.5e
          </a>
        </div>
      </div>

      <div className="right-side">CHARLIE LOVEJOY</div>
    </div>
  );
};

export default withRouter(NavigationComponent);
