// Packages
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");
  //
  // LCOAL SERVER
  // const url = "http://localhost:3000";
  // REMOTE SERVER
  const url = "https://site--backend-vinted--r6xgg7xm7vcz.code.run";
  //

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        // response = offers array
        const response = await axios.get(url);
        setData(response);
        // console.log("App >> useEffect >> data", data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData(url);
  }, []);
  console.log("token >>> ", token);
  return (
    <>
      {!isLoading && (
        <Router>
          <Header token={token} setToken={setToken} />
          <Routes>
            <Route path="/" element={<Home data={data} />} />
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
      )}
    </>
  );
}

export default App;
