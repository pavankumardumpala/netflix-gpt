import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
  };

  return (
    <>
      <div className=" absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>
      <form className=" text-white p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder=" Enter Email "
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Regiestered? Sign In Now"}
        </p>
      </form>
    </>
  );
};

export default Login;
