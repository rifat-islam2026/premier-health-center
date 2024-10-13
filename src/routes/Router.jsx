import {
    createBrowserRouter
} from "react-router-dom";

import Root from "../layouts/Root/Root";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import ShowDetails from "../pages/ShowDetails/ShowDetails";
import UserInfo from "../pages/UserInfo/UserInfo";
import PrivateRoute from "../providers/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
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
                path: "/login",
                element:<Login/>
            },
            {
                path: "/register",
                element:<Register/>
            },
            {
                path: "/userInfo",
                element:<PrivateRoute><UserInfo/></PrivateRoute>
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