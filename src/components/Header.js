import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import BingScape from "../img/BingScape.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    //Toggle Search for GPT
    dispatch(toggleGptSearchView());
  };

  //   const handleLanguageChange = (e) => {
  //     // console.log(e.target.value);
  //     dispatch(changeLanguage(e.target.value));
  //   };

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-4 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between md:bg-gradient-to-b from-black">
      <img
        className="w-44 mx-auto md:mx-0 md:py-2"
        src={BingScape}
        alt="logo"
      ></img>
      {user && (
        <div className="flex justify-between p-1">
          <button
            className="px-4 py-1 mx-2 my-1 text-white hover:scale-90 rounded-lg bg-red-600 bg-opacity-50 md:bg-transparent"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="text-white md:text-red-600 hover:scale-90 rounded-lg p-3 py-1 mx-2 my-1 md:font-semibold bg-red-600 bg-opacity-50 md:bg-transparent"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
