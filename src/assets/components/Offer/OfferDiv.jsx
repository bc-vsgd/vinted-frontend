import { Link } from "react-router-dom";

const OfferDiv = ({ offer, token }) => {
  const id = offer._id;
  const name = offer.product_name;
  const description = offer.product_description;
  const price = offer.product_price;
  // product_details array
  let brand = "";
  let size = "";
  let condition = "";
  let color = "";
  let place = "";
  let payment = "";
  if (offer.product_details) {
    if (offer.product_details[0]) {
      brand = offer.product_details[0].MARQUE;
    }
    if (offer.product_details[1]) {
      size = offer.product_details[1].TAILLE;
    }
    if (offer.product_details[2]) {
      condition = offer.product_details[2].ÉTAT;
    }
    if (offer.product_details[3]) {
      color = offer.product_details[3].COULEUR;
    }
    if (offer.product_details[4]) {
      place = offer.product_details[4].EMPLACEMENT;
    }
    if (offer.product_details[5]) {
      payment = offer.product_details[5]["MODES DE PAIEMENT"];
    }
  }
  // Image
  let imageId;
  let image;
  if (offer.product_image) {
    imageId = offer.product_image.public_id;
    image = offer.product_image.secure_url;
  }
  // Pictures
  const picturesUrl = [];
  // First picture url = image url
  if (offer.product_pictures) {
    const pictures = offer.product_pictures;
    for (let i = 0; i < pictures.length; i++) {
      picturesUrl.push(pictures[i].secure_url);
    }
  }
  // Owner
  let ownerId;
  let owner;
  let avatar;
  let avatarId;
  if (offer.owner) {
    ownerId = offer.owner._id;
    if (offer.owner.account) {
      owner = offer.owner.account.username;
      if (offer.owner.account.avatar) {
        avatarId = offer.owner.account.avatar.public_id;
        avatar = offer.owner.account.avatar.secure_url;
      }
    }
  }
  // Component return
  return (
    <div className="offer-div container">
      <div>{image && <img src={image} alt="Product image" />}</div>
      <div>
        <p>{price} €</p>
        <div className="details-div">
          {brand && (
            <div>
              <span>MARQUE</span>
              <span>{brand}</span>
            </div>
          )}
          {size && (
            <div>
              <span>TAILLE</span>
              <span>{size}</span>
            </div>
          )}
          {condition && (
            <div>
              <span>ETAT</span>
              <span>{condition}</span>
            </div>
          )}
          {color && (
            <div>
              <span>COULEUR</span>
              <span>{color}</span>
            </div>
          )}
          {place && (
            <div>
              <span>EMPLACEMENT</span>
              <span>{place}</span>
            </div>
          )}
          {payment && (
            <div>
              <span>MODES DE PAIEMENT</span>
              <span>{payment}</span>
            </div>
          )}
        </div>
        <div className="description-div">
          <p>{name}</p>
          <p>{description}</p>
          <div>
            {avatar && <img src={avatar} alt="Avatar" />}
            {owner && <span>{owner}</span>}
          </div>
        </div>
        {token ? (
          <Link to="/payment" state={{ id, price, title: name }}>
            <button>Acheter</button>
          </Link>
        ) : (
          <Link to="/login">
            <button>Acheter</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default OfferDiv;
