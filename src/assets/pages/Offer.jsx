import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import OfferDiv from "../components/Offer/OfferDiv";

const Offer = ({ url }) => {
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchOfferData = async (url) => {
      try {
        const response = await axios.get(`${url}/offer/${id}`);
        const foundOffer = response.data.offer;
        setOffer(foundOffer);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };
    fetchOfferData(url);
  }, []);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="offer-page">
      <OfferDiv offer={offer} />
    </div>
  );
};

export default Offer;
