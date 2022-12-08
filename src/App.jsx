import "./App.css";
import { Theme, Button } from "react-daisyui";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import User from "./components/users/User";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

import ThemeContext from "./context/theme/ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <GithubProvider>
      <AlertProvider>
        <Theme dataTheme={theme}>
          <Router>
            <div className="min-h-screen flex flex-col justify-between">
              <Navbar />
              <main className="container mx-auto px-3 pb-12 ">
                <Alert />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/notfound" element={<Notfound />} />
                  <Route path="/*" element={<Notfound />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </Router>
        </Theme>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
