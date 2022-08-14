import { AnyAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import SignInBox from "../components/SignInBox";
import { Helmet } from "react-helmet";

export default function SignIn() {
  const isAuth = useSelector((state: AnyAction) => state.auth.authData);
  const location: any = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (isAuth.token) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }
  return (
    <>
      <Helmet>
        <title>Kanban App - Sign In</title>
      </Helmet>
      <div>
        <SignInBox />
      </div>
    </>
  );
}
