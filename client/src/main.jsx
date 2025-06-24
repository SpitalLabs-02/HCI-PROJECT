import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import Services from "./pages/Services.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import CareGiver from "./pages/auth/signup/CareGiver.jsx";
import AuthLayout from "./Layouts/AuthLayout.jsx";
import CareRecipientSignUp from "./pages/auth/CareRecipientSignUp.jsx";
import CareRecipient from "./pages/auth/signup/CareRecipient.jsx";
import CareRepresentative from "./pages/auth/signup/CareRepresentative.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SignUp />} />
        <Route path="/caregiver" element={<CareGiver />} />
        <Route path="/care-recipient-singup" element={<CareRecipientSignUp />} />
        <Route path="/care-recipient" element={<CareRecipient />} />
        <Route path="/care-representative" element={<CareRepresentative />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
