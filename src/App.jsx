import { useState } from "react";
import { Button } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";
import PricePage from "./Pages/PricePage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import FooterComponent from "./Components/FooterComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/log-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
