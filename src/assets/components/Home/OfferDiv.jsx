import { Link } from "react-router-dom";

const OfferDiv = ({ offer }) => {
  // console.log("home / offer div >>>> offer >>>> ", offer);
  const id = offer._id;
  const price = offer.product_price;
  const brand = offer.product_details[0].MARQUE;
  const size = offer.product_details[1].TAILLE;
  // const imageId = offer.product_image.public_id;
  const image = offer.product_image.secure_url;

  const ownerId = offer.owner._id;
  const owner = offer.owner.account.username;
  let avatar;
  let avatarId;
  if (offer.owner.account.avatar) {
    avatarId = offer.owner.account.avatar.public_id;
    avatar = offer.owner.account.avatar.secure_url;
  }
  return (
    <div className="home-offer-div">
      <div>
        {avatarId ? <img src={avatar} alt="Avatar" /> : <div></div>}
        <span>{owner}</span>
      </div>
      <div>
        <Link to={`/offer/${id}`} className="offer-link">
          <img src={image} alt="Photo produit" />
          <div>
            <p>{`${price} €`}</p>
            <p>{size}</p>
            <p>{brand}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OfferDiv;
