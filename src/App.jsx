import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";

// Pages
import Home from "./assets/pages/Home";
import Offer from "./assets/pages/Offer";
import NotFound from "./assets/pages/NotFound";

// Components
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //
  // API
  // const url = "https://lereacteur-vinted-api.herokuapp.com/offers";
  // LCOAL SERVER
  // const url = "http://localhost:3000";
  // REMOTE SERVER
  const url = "https://site--backend-vinted--r6xgg7xm7vcz.code.run";
  //

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData(url);
  }, []);

  return (
    <>
      {!isLoading && (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/offer/:id" element={<Offer url={url} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
