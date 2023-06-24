import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

const RouteSwitch = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
