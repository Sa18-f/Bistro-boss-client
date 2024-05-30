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
import UpdateItem from "../Pages/Dashboard/Update Item/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment History/PaymentHistory";
import UserHome from "../Pages/Dashboard/User Home/UserHome";
import AdminHome from "../Pages/Dashboard/Admin Home/AdminHome";

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
            {
               path: "payment",
               element: <Payment></Payment>
            },
            {
               path: "paymentHistory",
               element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "userHome",
                element: <UserHome></UserHome>
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
                path: "updateItem/:id",
                element: <UpdateItem></UpdateItem>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: "users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            }
        ]
    }
]);
export default router;