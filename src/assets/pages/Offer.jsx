import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import OfferDiv from "../components/Offer/OfferDiv";

const Offer = ({ url }) => {
  const [offer, setOffer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchOfferData = async () => {
      try {
        // DIRECTLY API REQUEST
        //
        // const response = await axios.get(`${url}/offers);
        // const offers = response.data.offers;
        // const indexFound = offers.findIndex((offer) => offer._id === id);
        // console.log(indexFound);
        // setOffer(offers[indexFound]);
        //
        // BACKEND REQUEST
        //
        const response = await axios.get(`${url}/offer/${id}`);
        console.log(response.data);
        const offer = response.data;
        setOffer(offer);
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

export default Offer;
