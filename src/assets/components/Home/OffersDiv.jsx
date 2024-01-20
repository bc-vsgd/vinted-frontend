import OfferDiv from "./OfferDiv";

const OffersDiv = ({ data }) => {
  //   console.log(data);
  const offers = data.offers;
  console.log(offers);
  return (
    <div className="offers-div container">
      {offers.map((offer) => {
        return <OfferDiv offer={offer} key={offer._id} />;
      })}
    </div>
  );
  //   for (let i = 0; i < offers.length; i++) {
  //     const offer = offers[i];
  //     const id = offer._id;
  //     const price = offer.product_price;
  //     const brand = offer.product_details[0].MARQUE;
  //     const size = offer.product_details[1].TAILLE;
  //     const imageId = offer.product_image.public_id;
  //     const image = offer.product_image.secure_url;
  //     const ownerId = offer.owner._id;
  //     const owner = offer.owner.account.username;
  //     if (offer.owner.account.avatar) {
  //       const avatarId = offer.owner.account.avatar.public_id;
  //       const avatar = offer.owner.account.avatar.secure_url;
  //       console.log(avatarId, avatar);
  //     }
  //     console.log(id, price, brand, size);
  //     console.log(imageId, image);
  //     console.log(ownerId, owner);
  //   }
  //   return <div>Offers div</div>;
};

export default OffersDiv;
