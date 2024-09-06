import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";
import PricePage from "./Pages/PricePage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import TermsAndConditions from "./Pages/TermsAndConditions";
import ForgotPassword from "./Pages/ForgotPassword";
import Verification from "./Pages/Verification";

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
        <Route path="/verification" element={<Verification />} />
        <Route path="/tnc" element={<TermsAndConditions />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
