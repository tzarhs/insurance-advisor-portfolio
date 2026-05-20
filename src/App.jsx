import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./App.css";
import Home from "./pages/Home";
import LifeInsurance from "./pages/LifeInsurance";
import HomeInsurance from "./pages/HomeInsurance";
import HealthInsurance from "./pages/HealthInsurance";

export default function App() {
  const location = useLocation();
  const mainRef = useRef(null);

  // On every route change, move focus to <main> so screen readers
  // announce the new page instead of staying silent
  useEffect(() => {
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zoi" element={<LifeInsurance />} />
          <Route path="/katoikia" element={<HomeInsurance />} />
          <Route path="/ygeia" element={<HealthInsurance />} />
        </Routes>
      </main>
    </>
  );
}
