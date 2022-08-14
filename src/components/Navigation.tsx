import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import LogoSVG from "./Logo";
import data from "./../../package.json";
import { AnyAction } from "@reduxjs/toolkit";
import { authActions } from "./../store/auth";
import { ROUTES } from "./../routes/AppRoutes";

export default function Navigation() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: AnyAction) => state.auth.authData);

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
        {isAuth?.token && (
          <>
            <li className="nav-item">
              <NavLink to={ROUTES.PRIVATE.HOME}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={ROUTES.PRIVATE.BACKLOG}>Backlog</NavLink>
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
              <a>{isAuth.name}</a>
            </li>
          </>
        )}
        {!isAuth.token && (
          <li className="nav-item">
            <NavLink to={ROUTES.PUBLIC.LOGIN}>Login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
