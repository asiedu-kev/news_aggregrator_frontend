import React from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import LoginComponent from "./components/LoginComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterComponent from "./components/RegisterComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="login" element={<LoginComponent />} />
        <Route path="register" element={<RegisterComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
