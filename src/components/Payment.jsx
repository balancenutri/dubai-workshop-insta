import axios from "axios";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "libphonenumber-js"; // Import the phone validation library
import "react-phone-input-2/lib/style.css";
import BnLogo from "../assets/bn_logo.png";

const RazorpayPayment = ({ setModal }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [currency, setCurrency] = useState("AED");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const amount = currency === "AED" ? 50 : 1200;

  const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const api = `${apiUrl}/dubai/add-workshop-insta`;

  const validate = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      errors.email = "Invalid email address";
    if (!phoneNumber) errors.phone = "Phone number is required";
    else if (phoneNumber.length < 8)
      errors.phone = "Phone number must be at least 8 digits";
    if (!currency) errors.currency = "Currency selection is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (field, value) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "currency") setCurrency(value);

    const fieldErrors = { ...errors };
    if (field === "name" && !value.trim()) {
      fieldErrors.name = "Name is required";
    } else {
      delete fieldErrors.name;
    }

    if (field === "email") {
      if (!value.trim()) {
        fieldErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        fieldErrors.email = "Invalid email address";
      } else {
        delete fieldErrors.email;
      }
    }

    if (field === "currency" && !value) {
      fieldErrors.currency = "Currency selection is required";
    } else {
      delete fieldErrors.currency;
    }

    setErrors(fieldErrors);
  };

  const handlePhoneChange = (value, country) => {
    setPhoneCode(country.dialCode);
    setPhoneNumber(value.slice(country.dialCode.length));

    const phoneWithCode = `+${country.dialCode}${value.slice(country.dialCode.length)}`;
    const fieldErrors = { ...errors };

    // Validate the phone number based on the country code
    if (!value) {
      fieldErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(phoneWithCode)) {
      fieldErrors.phone = "Invalid phone number";
    } else {
      delete fieldErrors.phone;
    }

    setErrors(fieldErrors);
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const data = {
      name,
      email,
      phone_code: phoneCode,
      phone: phoneNumber,
      currency,
      amount,
      admin_id: 104,
    };

    try {
      const responses = await axios.post(api, data);
      console.log("Form submitted successfully:", responses.data.data);
      const options = {
        key: key,
        amount: amount * 100,
        currency: currency,
        name: name,
        description: "Payment for Dubai Workshop",
        handler: function (response) {
          console.log(response);
          navigate("/congrats", {
            state: {
              response: response,
              workshop_id: responses.data?.data?.workshop_id,
            },
            replace: true,
          });
        },
        prefill: {
          name: name,
          email: email,
          contact: `+${phoneCode}${phoneNumber}`,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="md:w-[420px] bg-white shadow-lg rounded-xl px-6 py-8 mx-2">
      <div className="flex justify-center -mt-2">
        <img
          src={BnLogo}
          alt=""
          srcSet=""
          className="size-10 object-contain rounded-md"
        />
      </div>
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
        Enter Your Details
      </h2>

      <form onSubmit={handlePayment}>
        <div className="flex flex-col space-y-1 mb-4 relative">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Enter Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`w-full h-10 text-base px-4 pl-10 py-3 text-gray-700 bg-white border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <FaRegUser
            className="absolute top-[30px] left-2 text-gray-500"
            size={20}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-0.5">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1 mb-4 relative">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Enter Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full h-10 text-base px-4 pl-10 py-3 text-gray-700 bg-white border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <MdOutlineMail
            className="absolute top-[30px] left-2 text-gray-500"
            size={20}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-0.5">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1 mb-6">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Enter Phone Number
          </label>
          <PhoneInput
            country={"ae"}
            value={`${phoneCode}${phoneNumber}`}
            onChange={handlePhoneChange}
            buttonClass={errors.phone ? "!border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-0.5">{errors.phone}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1 mb-6 relative">
          <label
            htmlFor="currency"
            className="text-sm font-medium text-gray-700"
          >
            Preferred currency for payment:
          </label>
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="inr"
                name="currency"
                value="INR"
                checked={currency === "INR"}
                onChange={(e) => handleChange("currency", e.target.value)}
                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="inr"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                INR
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="aed"
                name="currency"
                value="AED"
                checked={currency === "AED"}
                onChange={(e) => handleChange("currency", e.target.value)}
                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="aed"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                AED
              </label>
            </div>
          </div>
          {errors.currency && (
            <p className="text-sm text-red-500 mt-0.5">{errors.currency}</p>
          )}
        </div>

        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            type="button"
            className="w-full py-2 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300 ease-in-out"
            onClick={() => setModal(false)}
          >
            Back
          </button>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RazorpayPayment;
