// Style
import "./Payment.css";
// Packages
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// Components
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
const stripe_public_key =
  "pk_test_51OflQaCNTcUOXXm7FjjaR0rrP91cyEDBwvkOkj3vTpgTjIwpzINjBh7N0N3c0GPzXmLalqtUUxlfXD2me7F7lTdZ00Ady7B8tl";

const stripePromise = loadStripe(stripe_public_key);

const Payment = ({ url, token }) => {
  const location = useLocation();

  const { id, price, title } = location.state;
  const protectionFees = 0.4;
  const shippingFees = 0.8;
  const totalPrice = (price + protectionFees + shippingFees).toFixed(2);

  // console.log(totalPrice);
  // console.log("payment, offer >>>> ", id, price, title);
  return (
    <div className="payment-div">
      <div>
        <p>Résumé de la commande</p>
      </div>

      <div className="payment-div-div">
        <div>
          <span>Commande</span>
          <span>{price} €</span>
        </div>
        <div>
          <span>Frais protection acheteurs</span>
          <span>{protectionFees} €</span>
        </div>
        <div>
          <span>Frais de port</span>
          <span>{shippingFees} €</span>
        </div>
      </div>

      <div className="payment-div-div">
        <div>
          <span>Total</span>
          <span>{totalPrice}</span>
        </div>
      </div>

      <div>
        <p>
          Il ne vous reste plus qu'une étape pour vous offrir{" "}
          <span>{title}</span>. Vous allez payer <span>{totalPrice} €</span>{" "}
          (frais de protection et frais de port inclus).
        </p>
      </div>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            url={url}
            totalPrice={totalPrice}
            title={title}
            token={token}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
