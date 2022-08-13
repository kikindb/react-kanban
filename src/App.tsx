import "./App.css";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import Alert from "./UI/Alert";
import { useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";

function App() {
  const alertData = useSelector((state: AnyAction) => state.alert.alertData);
  console.log(alertData);
  return (
    <div className="App">
      <Navigation />
      {alertData.show && (
        <Alert title={alertData.title} type={alertData.type}>
          {alertData.body}
        </Alert>
      )}

      <Outlet />
    </div>
  );
}

export default App;
