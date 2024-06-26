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
// Packages
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
// Style
import "./App.css";
// Pages
import Home from "./assets/pages/Home/Home";
import Offer from "./assets/pages/Offer/Offer";
import Signup from "./assets/pages/Signup/Signup";
import Login from "./assets/pages/Login/Login";
import Publish from "./assets/pages/Publish/Publish";
import NotFound from "./assets/pages/NotFound/NotFound";
import Payment from "./assets/pages/Payment/Payment";
// Components
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";

function App() {
  const [token, setToken] = useState("");
  const [sort, setSort] = useState("price-asc");
  const [priceMin, setPriceMin] = useState("");

  // LOCAL SERVER
  // const url = "http://localhost:3000";
  // REMOTE SERVER
  // Exercise server
  // const url = "https://site--backend-vinted--r6xgg7xm7vcz.code.run";
  // My site server
  const url = "https://site--home--r6xgg7xm7vcz.code.run";
  // console.log("token >>> ", token);
  // console.log(sort);

  return (
    <>
      <Router>
        <Header
          token={token}
          setToken={setToken}
          sort={sort}
          setSort={setSort}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                url={url}
                token={token}
                sort={sort}
                setSort={setSort}
                priceMin={priceMin}
                setPriceMin={setPriceMin}
              />
            }
          />
          <Route
            path="/offer/:id"
            element={<Offer url={url} token={token} />}
          />
          <Route
            path="/signup"
            element={<Signup url={url} setToken={setToken} />}
          />
          <Route
            path="/login"
            element={<Login url={url} setToken={setToken} />}
          />
          <Route
            path="/publish"
            element={<Publish url={url} token={token} />}
          />
          <Route
            path="/payment"
            element={<Payment url={url} token={token} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
