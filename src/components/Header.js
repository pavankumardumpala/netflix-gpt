import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <div className="font-bold text-white flex">
        <img
          className="w-44"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt="netflix-logo"
        />
        {/* <h1 className="m-2 p-6 text-gray-800">Hello {user.displayName}..!</h1> */}
      </div>
      {user && (
        <div className="flex w-10 h-10 mr-8 m-6">
          <img
            className=""
            alt="user_icon"
            src="https://www.pngkit.com/png/full/281-2812821_user-account-management-logo-user-icon-png.png"
          />
          <button
            className="text-black font-bold text-sm rounded-sm bg-green-600 p-1 m-1"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
