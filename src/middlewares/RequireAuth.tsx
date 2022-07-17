import React from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth(
  props: React.PropsWithChildren
): React.ReactElement {
  const isAuth = useSelector((state: AnyAction) => state.auth.isAuthenticated);
  const location = useLocation();

  useEffect(() => {
    console.log("RequireAuth useEffect");
  }, [isAuth]);

  if (!isAuth) {
    console.log("no user!!");
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{props.children}</>;
}
