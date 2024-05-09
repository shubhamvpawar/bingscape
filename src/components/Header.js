import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

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
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className="w-40"
                src={LOGO} alt='logo'></img>
            {user && (
                <div>
                    <button
                        onClick={handleSignOut}
                        className="bg-red-600 text-white rounded-md p-2 h-1/2">Sign Out</button>
                </div>
            )}
        </div>
    )
}

export default Header; 