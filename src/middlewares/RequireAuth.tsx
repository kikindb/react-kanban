import React from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions, authKey } from "../store/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../routes/AppRoutes";

export default function RequireAuth(): React.ReactElement {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: AnyAction) => state.auth.authData);
  const location = useLocation();
  const authData = JSON.parse(window.localStorage.getItem(authKey) as string);

  useEffect(() => {
    if (authData) {
      console.log("authData Exists: ", authData);
      dispatch(authActions.login(authData));
    }
  }, [dispatch]);

  // TODO: is failing when you come from login and you log in successfully
  if (!isAuth?.token) {
    console.log("no user!!");
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate to={ROUTES.PUBLIC.LOGIN} state={{ from: location }} replace />
    );
  }

  return <Outlet />;
}
