import { lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Middlewares
import RequireAuth from "../middlewares/RequireAuth";

// Pages
import Backlog from "./../pages/Backlog";
// const Backlog = lazy(() => import("./../pages/Backlog"));
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import NotFound from "./../pages/NotFound";

import App from "./../App";
import SignIn from "../pages/SignIn";

export const ROUTES = {
  PUBLIC: {
    LOGIN: "login",
    SIGNIN: "signin",
  },
  PRIVATE: {
    HOME: "/",
    BACKLOG: "backlog",
  },
};

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.PRIVATE.HOME} element={<App />}>
          <Route element={<RequireAuth />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.PRIVATE.BACKLOG} element={<Backlog />} />
          </Route>

          <Route path={ROUTES.PUBLIC.LOGIN} element={<Login />} />
          <Route path={ROUTES.PUBLIC.SIGNIN} element={<SignIn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
