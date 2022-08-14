import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import Loading from "./components/Loading";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
