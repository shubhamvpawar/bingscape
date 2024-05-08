import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
// import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    // const navigate = useNavigate();

    // const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    // const toggleSignInForm = () => {
    //     setIsSignInForm(!isSignInForm);
    // };
    const handleButtonClick = () => {
        //Validate the form Data
        // checkValidData(email, password);
        // console.log(email.current.value);
        // console.log(password.current.value);

        // const message = checkValidData(email.current.value, password.current.value, name.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        // console.log(message);
        setErrorMessage(message);

        if (message) return;
        //If message present then return
        //Sign In / Sign Up
        if (!isSignInForm) {
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    // navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
        else {
            //Sign IN
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    // navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg"
                    alt='background'>

                </img>
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute p-12 bg-black w-1/3 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
                <h1 className="text-3xl font-bold py-2">
                    {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input
                    // ref={name}
                    type="text"
                    placeholder="Full Name"
                    className="p-2 my-2 w-full bg-gray-700 rounded-lg"
                />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-2 my-2 w-full bg-gray-700 rounded-lg" />


                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-2 my-2 w-full bg-gray-700 rounded-lg" />
                <p className="text-red-600 font-semibold">{errorMessage}</p>
                <button
                    className="p-2 my-2 bg-red-600 w-full rounded-lg"
                    onClick={handleButtonClick}
                >{isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-2 cursor-pointer"
                    onClick={toggleSignInForm}
                >{isSignInForm ? "New to Netflix? Sign Up Now" : "Alreadty a user? Sign In now"}
                </p>
            </form>
        </div>
    )
}

export default Login;