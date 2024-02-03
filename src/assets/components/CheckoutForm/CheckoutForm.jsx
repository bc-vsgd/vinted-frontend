// Packages
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ url, totalPrice, title, token }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clic");
    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "Id de l'acheteur",
    });
    console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;
    const response = await axios.post(`${url}/pay`, {
      stripeToken,
      totalPrice,
      title,
    });
    console.log("front > checkoutform > response.data", response.data);
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };

  return !completed ? (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>Valider</button>
    </form>
  ) : (
    <span>Paiement effectué !</span>
  );
};

export default CheckoutForm;
