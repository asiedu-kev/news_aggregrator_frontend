import React from "react";
import LoginComponent from "./components/LoginComponent";
import { Route, Routes } from "react-router-dom";
import RegisterComponent from "./components/RegisterComponent";
import HomeLayout from "./layouts/HomeLayout";
import NewsCard from "./components/NewsCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="login" element={<LoginComponent />} />
      <Route path="register" element={<RegisterComponent />} />
      <Route
        path="/home"
        element={
          <HomeLayout>
            <NewsCard />
          </HomeLayout>
        }
      />
    </Routes>
  );
}

export default App;
