// import {CardElement, useElements, useStripe} from '../../src';

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { isPending, data: parcelInfo = {} } = useQuery({
    queryKey: ["parcels", parcelId],
    enabled: !!parcelId, // 🔥 IMPORTANT FIX
    queryFn: async () => {
      // console.log("parcelId:", parcelId);

      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const amount = parcelInfo.cost;
  const amountInCent = amount * 100;
  console.log(amountInCent);

  if (isPending) {
    return "Loading.......";
  }

  if (error) {
    console.log("Query Error:", error);
    return <p>Failed to load parcel</p>;
  }

  // console.log("Parcel Info:", parcelInfo);

  // const handleSubmit = async (event) => {
  //   // Block native form submission.
  //   event.preventDefault();

  //   if (!stripe || !elements) {
  //     return;
  //   }

  //   const card = elements.getElement(CardElement);

  //   if (card == null) {
  //     return;
  //   }

  //   // Use your card Element with other Stripe.js APIs
  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card,
  //   });

  //   if (error) {
  //     console.log("[error]", error);
  //     setError(error.message);
  //   } else {
  //     setError("");
  //     console.log("[PaymentMethod]", paymentMethod);
  //   }

  //   // payment intent
  //   const res = await axiosSecure.post("/create-payment-intent", {
  //     amountInCent: parseInt(amountInCent), // ✅ ensure number
  //     parcelId,
  //   });

  //   const clientSecret = res.data.clientSecret;

  //   // 2️⃣ Confirm payment
  //   const result = await stripe.confirmCardPayment(clientSecret, {
  //     payment_method: {
  //       card: card,
  //       billing_details: {
  //         name: user?.displayName || "Anonymous",
  //         email: user?.email || "anonymous@gmail.com",
  //       },
  //     },
  //   });

  //   // 4️⃣ Success
  //   if (result.error) {
  //     console.log(result.error.message);
  //   } else {
  //     if (result.paymentIntent.status === "succeeded") {
  //       console.log("Payment Success");
  //       // alert("Payment Successful 🎉");
  //       console.log(result)
  //     }
  //   }

  //   // await axiosSecure.patch(`/parcels/${parcelId}`, {
  //   //   status: "paid",
  //   //   transactionId: paymentIntent.id,
  //   // });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    try {
      // 1️⃣ Create payment intent
      const res = await axiosSecure.post("/create-payment-intent", {
        amountInCent: parseInt(amountInCent),
        parcelId,
      });

      const clientSecret = res.data.clientSecret;

      // 2️⃣ Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "Anonymous",
              email: user?.email || "anonymous@gmail.com",
            },
          },
        },
      );

      // 3️⃣ Handle error
      if (error) {
        console.log("Payment Error:", error.message);
        setError(error.message);
        return; // 🔥 STOP here
      }

      // 4️⃣ Success
      if (paymentIntent.status === "succeeded") {
        console.log("Payment Success:", paymentIntent);

        // 🔥 1. Update parcel status (pending → paid)
        await axiosSecure.patch(`/parcels/${parcelId}`, {
          transactionId: paymentIntent.id,
        });

        // 💾 2. Save payment history
        const paymentData = {
          parcelId,
          email: user?.email,
          amount: amountInCent / 100,
          transactionId: paymentIntent.id,
          status: "paid",
          date: new Date(),
        };

        await axiosSecure.post("/payments", paymentData);

        // 🔄 3. Update UI instantly (React state optional)
        setError("");
        Swal.fire({
          title: "Payment Successful 🎉",
          text: "Your parcel payment has been completed successfully.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#6366f1",
        });
        navigate("/dashboard/myParcel")
      }
    } catch (err) {
      console.log("Server Error:", err.message);
      setError("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "450px",
        margin: "40px auto",
        border: "1px solid #000000",
        padding: "30px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #ffffff, #f7f9fc)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#1a1a1a",
          fontWeight: "600",
        }}
      >
        Secure Payment
      </h2>

      <div
        style={{
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #000000",
          backgroundColor: "#fff",
          marginBottom: "20px",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                fontFamily: "sans-serif",
                "::placeholder": {
                  color: "#000000",
                },
              },
              invalid: {
                color: "#e63946",
              },
            },
            // hidePostalCode: true,
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: stripe
            ? "linear-gradient(135deg, #4f46e5, #6366f1)"
            : "#ccc",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "600",
          cursor: stripe ? "pointer" : "not-allowed",
          transition: "all 0.3s ease",
          boxShadow: "0 5px 15px rgba(99,102,241,0.3)",
        }}
        onMouseOver={(e) => {
          if (stripe) {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 20px rgba(99,102,241,0.4)";
          }
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 5px 15px rgba(99,102,241,0.3)";
        }}
      >
        Pay for Parcel - ${amount}
      </button>

      {error && <p className="my-5 text-red-600">{error}</p>}

      <p
        style={{
          textAlign: "center",
          marginTop: "15px",
          fontSize: "12px",
          color: "#777",
        }}
      >
        🔒 Your payment is secure & encrypted
      </p>
    </form>
  );
};

export default PaymentForm;
