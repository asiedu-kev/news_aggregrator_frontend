import React from "react";
import LoginComponent from "./components/LoginComponent";
import { Route, Routes } from "react-router-dom";
import RegisterComponent from "./components/RegisterComponent";
import HomeLayout from "./layouts/HomeLayout";
import { MyPreferences } from "./pages/MyPreferences";
import { Settings } from "./pages/Settings";
import { Feed } from "./pages/Feed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="login" element={<LoginComponent />} />
      <Route path="register" element={<RegisterComponent />} />
      <Route
        path="/home"
        element={
          <HomeLayout title={"Feed"}>
            <Feed />
          </HomeLayout>
        }
      />
      <Route
        path="/preferences"
        element={
          <HomeLayout title={"My preferences"}>
            <MyPreferences />
          </HomeLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <HomeLayout title={"Settings"}>
            <Settings />
          </HomeLayout>
        }
      />
    </Routes>
  );
}

export default App;
