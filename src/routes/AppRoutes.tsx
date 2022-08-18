import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Middlewares
import RequireAuth from "../middlewares/RequireAuth";

// Pages
const Backlog = lazy(() => import("./../pages/Backlog"));
const Home = lazy(() => import("./../pages/Home"));
import Login from "./../pages/Login";
import NotFound from "./../pages/NotFound";

import App from "./../App";
const SignIn = lazy(() => import("./../pages/SignIn"));
import Loading from "../components/Loading";
import Admin from "../pages/Admin";
import RequireAdmin from "../middlewares/RequireAdmin";

export const ROUTES = {
  PUBLIC: {
    LOGIN: "login",
    SIGNIN: "signin",
  },
  PRIVATE: {
    HOME: "/",
    BACKLOG: "backlog",
    ADMIN: "admin",
  },
};

export default function AppRoutes() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={ROUTES.PRIVATE.HOME} element={<App />}>
            <Route element={<RequireAuth />}>
              <Route index element={<Home />} />
              <Route path={ROUTES.PRIVATE.BACKLOG} element={<Backlog />} />
              <Route element={<RequireAdmin />}>
                <Route path={ROUTES.PRIVATE.ADMIN} element={<Admin />} />
              </Route>
            </Route>

            <Route path={ROUTES.PUBLIC.LOGIN} element={<Login />} />
            <Route path={ROUTES.PUBLIC.SIGNIN} element={<SignIn />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
