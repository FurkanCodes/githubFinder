import { useState } from "react";
import "./App.css";
import { Theme, Button } from "react-daisyui";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Theme dataTheme="cyberpunk">
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main>Content</main>
          <Footer />
        </div>
      </Theme>
    </Router>
  );
}

export default App;
