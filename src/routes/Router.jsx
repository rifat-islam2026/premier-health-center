import {
    createBrowserRouter
} from "react-router-dom";

import Root from "../layouts/Root/Root";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import ShowDetails from "../pages/ShowDetails/ShowDetails";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "../providers/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/services",
                element:<Services/>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {
                path: "/register",
                element:<Register/>
            },
            {
                path: "/updateProfile",
                element:<PrivateRoute><UpdateProfile/></PrivateRoute>
            },
            {
                path: "/doctor/:id",
                element: <ShowDetails />,
                loader:()=>fetch('../doctors.json')
            }
        ]
    },
]);
export default router;