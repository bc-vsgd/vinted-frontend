import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import
import axios from "axios";
import { Link } from "react-router-dom";
import OfferDiv from "../components/Offer/OfferDiv";

const OfferPage = () => {
  const [offer, setOffer] = useState({});
  const { id } = useParams();
  const url = "https://lereacteur-vinted-api.herokuapp.com/offers";

  useEffect(() => {
    const fetchOfferData = async () => {
      try {
        const response = await axios.get(url);
        const offers = response.data.offers;
        const indexFound = offers.findIndex((offer) => offer._id === id);
        console.log(indexFound);
        setOffer(offers[indexFound]);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchOfferData(url);
  }, []);
  return (
    <div className="offer-page">
      <Link to="/">Accueil</Link>
      <OfferDiv offer={offer} />
    </div>
  );
};

export default OfferPage;
