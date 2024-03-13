import kasaheaderlogo from "../assets/logos/kasaheaderlogo.svg";
import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <img src={kasaheaderlogo} className="App_logo" alt="logo" />
        <ul className="header_nav">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
