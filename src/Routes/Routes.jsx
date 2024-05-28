import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/All Users/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashboard/Add Items/AddItem";
import ManageItems from "../Pages/Dashboard/Manage Item/ManageItems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <PrivateRoute><Menu></Menu></PrivateRoute>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal users routes
            {
                path: "cart",
                element: <Cart></Cart>
            },
            // admin routes
            {
                path: "addItems",
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: "manageItems",
                element: <ManageItems></ManageItems>
            },
            {
                path: "users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    }
]);
export default router;