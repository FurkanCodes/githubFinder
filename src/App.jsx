import { useState } from "react";
import "./App.css";
import { Theme, Button } from "react-daisyui";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Router>
      <Theme dataTheme="cyberpunk">
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<Notfound />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>

          <Footer />
        </div>
      </Theme>
    </Router>
  );
}

export default App;
