import React from "react";

import LogoImg from "../../static/assets/imgz/DnDCharacterSheetLogo.jpg";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
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
            View All
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
            target="_blank"
            activeclassname="nav-link-active"
          >
            PHB 3.5e
          </a>
        </div>
      </div>
      <div></div>
      <div className="right-side">
        <img src={LogoImg} />
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
