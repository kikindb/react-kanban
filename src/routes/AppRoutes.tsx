import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Middlewares
import RequireAuth from "../middlewares/RequireAuth";

// Pages
import Backlog from "./../pages/Backlog";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import NotFound from "./../pages/NotFound";

import App from "./../App";
import SignIn from "../pages/SignIn";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="backlog"
            element={
              <RequireAuth>
                <Backlog />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
