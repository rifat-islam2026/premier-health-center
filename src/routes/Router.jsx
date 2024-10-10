import {
    createBrowserRouter
} from "react-router-dom";

import Root from "../layouts/Root/Root";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";

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
            }
        ]
    },
]);
export default router;