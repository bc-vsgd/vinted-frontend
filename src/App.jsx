import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";

// Pages
import HomePage from "./assets/pages/HomePage";
import OfferPage from "./assets/pages/OfferPage";
import NotFound from "./assets/pages/NotFound";

// Components
import Header from "./assets/components/Header";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "https://lereacteur-vinted-api.herokuapp.com/offers";
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        // console.log(response.data);
        setData(response.data);
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
            <Route path="/" element={<HomePage data={data} />} />
            {/* <Route path="/offer" element={<Offer />} /> */}
            <Route path="/offer/:id" element={<OfferPage />} />
            <Route path="*" element={NotFound} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
