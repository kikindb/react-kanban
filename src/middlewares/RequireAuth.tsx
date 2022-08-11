import React from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth(
  props: React.PropsWithChildren
): React.ReactElement {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: AnyAction) => state.auth.authData);
  const location = useLocation();
  const authData = JSON.parse(window.localStorage.getItem("authData")!);

  useEffect(() => {
    if (authData) {
      console.log("authData Exists: ", authData);
      dispatch(authActions.login(authData));
    }
  }, [dispatch]);

  if (!isAuth.token) {
    console.log("no user!!");
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{props.children}</>;
}
