import React, { FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import LogoSVG from "./Logo";
import data from "./../../package.json";
import { AnyAction } from "@reduxjs/toolkit";
import { authActions } from "./../store/auth";

export default function Navigation() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: AnyAction) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="navigation-container">
      <div className="logo-container">
        <LogoSVG />
        <h1>
          Kanban App <small>{data.version}</small>
        </h1>
      </div>
      <ul className="nav-list">
        {isAuth && (
          <>
            <li className="nav-item">
              <NavLink to="./">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="./backlog">Backlog</NavLink>
            </li>
            <li className="nav-item">
              <button
                className="btn-logout"
                type="button"
                onClick={logoutHandler}
                aria-label="Log out"
              >
                Log Out
              </button>
            </li>
            <li className="nav-item">
              <a>User</a>
            </li>
          </>
        )}
        {!isAuth && (
          <li className="nav-item">
            <NavLink to="./login">Login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
