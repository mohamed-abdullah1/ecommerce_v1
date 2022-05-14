import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
const StripeTest = () => {
  const product = {
    price: 25,
    name: "t-shirt",
  };
  console.log(process.env.REACT_APP_STRIPE_KEY);
  const makePayment = (token) => {
    const asyncReq = async (token) => {
      try {
        const res = await axios.post(
          "http://localhost:9898/api/checkout/payment/",
          {
            product,
            token,
          }
        );
        console.log("response", res);
      } catch (err) {
        console.log("error", err);
      }
    };
    asyncReq(token);
  };
  return (
    <div>
      <StripeCheckout
        token={makePayment}
        stripeKey="pk_test_51KoVCxCaA7JCkhT1R2jPrPgrf5QVa9pHfdTZkE55MsALFaEWtoUgMpDH6gKzSLCgxzAE0cHEZORZJh2KHZyI2X7O005gL0g4Js"
        name="Buy React"
        amount={product.price * 100}
      />
    </div>
  );
};

export default StripeTest;
