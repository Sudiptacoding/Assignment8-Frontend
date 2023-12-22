import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            {
                path: "/Dashboard",
                element: <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>,
            },
            {
                path: "/About",
                element: <ProtectedRoute><About></About></ProtectedRoute>,
            },
            {
                path: "/contract",
                element: <ProtectedRoute><Contact></Contact></ProtectedRoute>,
            },


        ],
    },
]);
export default router;