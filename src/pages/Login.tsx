import React, { useEffect } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import LoginBox from "../components/LoginBox";

export default function Login() {
  const isAuth = useSelector((state: AnyAction) => state.auth.isAuthenticated);
  const location: any = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (isAuth) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }
  return (
    <div>
      <LoginBox />
    </div>
  );
}
