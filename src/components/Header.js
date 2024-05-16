import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import BingScape from "../img/BingScape.png"

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    const handleGptSearchClick = () => {
        //Toggle Search for GPT
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        // console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
    }


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(
                    addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        //Unsubscribe when component unmounts 
        return () => unsubscribe();
    }, [])

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
            <img
                className="w-44 mx-auto md:mx-0 md:py-2"
                src={BingScape} alt='logo'></img>
            {user && (
                <div className='flex p-1'>
                    {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white rounded-md'
                        onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                    </select>}
                    {/* <button
                        className='px-4 py-2 mx-2 my-2 text-white bg-purple-600 rounded-md'
                        onClick={handleGptSearchClick}
                    >{showGptSearch ? "Home" : "GPT Search"}</button> */}
                    <button
                        onClick={handleSignOut}
                        className="bg-red-500 text-white rounded-lg px-3 py-1 mx-auto my-2 md:font-semibold">Sign Out</button>
                </div>
            )}
        </div>
    )
};

export default Header; 