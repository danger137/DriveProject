"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"; // Use "@stripe/stripe-js" instead of "@stripe/react-stripe-js"
import SubscriptionForm from "../checkoutForm/checkoutForm";
const stripePromise = loadStripe("pk_test_51QBmYBCF6g9z4JDcgW2PJYh5qTChtUr5qkMtvpdGAN7E96KNxHB8mEH2AfuwRLTvHeClOUd089ZWzuqWxsM2XBMH00kuLjAbpP");

export default function Registration() {
  return (
    <div>
        <div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-top"
  style={{ backgroundImage: "url('https://aadrivingacademy.net/wp-content/uploads/2021/11/drivers-ed-class-2400-scaled.jpg')" }}
>
  <div className="relative text-center mt-24 sm:mt-28 md:mt-20 lg:mt-24 px-4">
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-10 sm:mt-20 text-white">
    YSSR EDUATION DRIVING ACADEMY
    </h1>
    <h1 className="font-semibold md:font-bold text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-5 text-white">
   Registration
    </h1>
  </div>
</div>
     <div className="mt-10" >
     <Elements stripe={stripePromise}>
        <SubscriptionForm />
      </Elements>
     </div>
    </div>
  );
}
