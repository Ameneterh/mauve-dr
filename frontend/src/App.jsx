import { useState } from "react";
import viteLogo from "/vite.svg";
import { Button } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import HomePage from "./Pages/HomePage";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
