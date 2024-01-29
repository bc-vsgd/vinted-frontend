// Packages
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// Pages
import Home from "./assets/pages/Home";
import Offer from "./assets/pages/Offer";
import Signup from "./assets/pages/Signup";
import Login from "./assets/pages/Login";
import NotFound from "./assets/pages/NotFound";
// Components
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
// Solid icons
import {
  faMagnifyingGlass,
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
// Brands icons
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// Regular icons
import { faUser } from "@fortawesome/free-regular-svg-icons";
library.add(
  faEnvelope,
  faKey,
  faListAlt,
  faUser,
  faGithub,
  faLinkedin,
  faMagnifyingGlass
);

function App() {
  const [token, setToken] = useState("");
  // REMOTE SERVER
  const url = "https://site--backend-vinted--r6xgg7xm7vcz.code.run";
  console.log("token >>> ", token);

  return (
    <>
      <Router>
        <Header token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home url={url} />} />
          <Route path="/offer/:id" element={<Offer url={url} />} />
          <Route
            path="/signup"
            element={<Signup url={url} setToken={setToken} />}
          />
          <Route
            path="/login"
            element={<Login url={url} setToken={setToken} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
