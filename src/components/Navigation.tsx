import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import LogoSVG from "./Logo";
import data from "./../../package.json";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <LogoSVG />
        <h1>
          Kanban App <small>{data.version}</small>
        </h1>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="./">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="./backlog">Backlog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="./login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
}
