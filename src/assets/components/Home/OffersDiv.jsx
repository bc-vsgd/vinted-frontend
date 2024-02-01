// Components
import OfferDiv from "./OfferDiv";

const OffersDiv = ({ data }) => {
  // data: {count, offers}
  // offers: objects array
  const offers = data.data.offers;
  console.log("home / offers div >>> offers >>>> ", offers);
  return (
    <div className="offers-div container">
      {offers.map((offer) => {
        return <OfferDiv offer={offer} key={offer._id} />;
      })}
    </div>
  );
};

export default OffersDiv;
