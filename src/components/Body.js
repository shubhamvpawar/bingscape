import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Body = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        // {
        //     path: "/",
        //     element: <Body />
        // },
    ])

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/auth.user
    //             const { uid, email, displayName } = user;
    //             dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
    //             // navigate("/browse")
    //         } else {
    //             dispatch(removeUser());
    //             // navigate("/")
    //         }
    //     });

    // }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;