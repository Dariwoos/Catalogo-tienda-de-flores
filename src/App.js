import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Detalles from "./Detalles";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalles" element={<Detalles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );   
}

