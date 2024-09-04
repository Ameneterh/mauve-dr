import { useState } from "react";
import { Button } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";
import PricePage from "./Pages/PricePage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import TermsAndConditions from "./Pages/TermsAndConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/log-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tnc" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
