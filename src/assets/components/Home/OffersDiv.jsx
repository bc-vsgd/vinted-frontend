// Components
import OfferDiv from "./OfferDiv";

const OffersDiv = ({ data }) => {
  // data: {count, offers}
  const offers = data.offers;
  return (
    <div className="offers-div container">
      {offers.map((offer) => {
        return <OfferDiv offer={offer} key={offer._id} />;
      })}
    </div>
  );
};

export default OffersDiv;
