import React, { useRef } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const footerRef = useRef(null);
  return (
    // <div className="scroll-wrapper">
    <div className="app-main">
      <ScrollToTop />
      <SmoothScroll />
      <ErrorBoundary>
        <Analytics />
        <CustomCursor cursorImage={assets.cursor} />
        <EnquireButton />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/cp" element={<Vcportal />} />
          <Route path="/services" element={<Service />} />
          <Route path="/privacy-policy" element={<PolicyPage />} />
          <Route path="/terms&conditions" element={<TermsConditions />} />
        </Routes>
      </ErrorBoundary>

      <Footer ref={footerRef} />

      <ScrollBump footerRef={footerRef} />
    </div>
    // </div>
  );
}

export default App;
