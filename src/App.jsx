import React, { useRef } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import CustomCursor from "./Components/InteractiveCursor";
import { assets } from "./assets/assets";
import EnquireButton from "./Components/EnquireButton";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollBump from "./Components/ScrollBump";
import PolicyPage from "./Pages/PrivacyPolicy";
import { Analytics } from "@vercel/analytics/react";
import TermsConditions from "./Pages/T&c";
import SmoothScroll from "./Components/SmoothScroll";
import ErrorBoundary from "./Components/ErrorBoundary";
import Vcportal from "./Pages/Vcportal";
import ScrollTriggerCleanupOnRouteChange from "./Components/ScrollTriggerCleanupOnRouteChange";
import Error404 from "./Pages/Error404";
import CookiesPopup from "./Components/CookiesPopup";



function App() {
  const footerRef = useRef(null);
  return (
    // <div className="scroll-wrapper">
    <div className="app-main">
      <ScrollToTop />
      <ScrollTriggerCleanupOnRouteChange />
      <SmoothScroll />
      <ErrorBoundary>
        <Analytics />
        <CustomCursor cursorImage={assets.cursor} />
        <EnquireButton />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/vc" element={<Vcportal />} />
          <Route path="/services" element={<Service />} />
          <Route path="/privacy-policy" element={<PolicyPage />} />
          <Route path="/terms&conditions" element={<TermsConditions />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      </ErrorBoundary>

      <Footer ref={footerRef} />
      <CookiesPopup />

      <ScrollBump footerRef={footerRef} />
    </div>
    // </div>
  );
}

export default App;
