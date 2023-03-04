import React from "react";
import LoginComponent from "./components/LoginComponent";
import { Route, Routes } from "react-router-dom";
import RegisterComponent from "./components/RegisterComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="login" element={<LoginComponent />} />
      <Route path="register" element={<RegisterComponent />} />
    </Routes>
  );
}

export default App;
