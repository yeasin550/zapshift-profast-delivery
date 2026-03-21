import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import ForgotPassword from "../Pages/Authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "../Pages/Authentication/ResetPassword/ResetPassword";
import About from "../Pages/About/About";
import OTPVerify from "../Pages/Authentication/OTPVerify/OTPVerify";
import BeRider from "../Pages/BeRider/BeRider";
import Error from "../Components/Error/Error";
import Pricing from "../Pages/Pricing/Pricing";
import Coverage from "../Pages/Coverage/Coverage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "coverage",
                Component: Coverage
            },
            {
                path: "pricing",
                Component: Pricing
            },
            {
                path: "rider",
                Component: BeRider
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login,
            },
            {
                path: "register",
                Component: Register,
            },
            {
                path: "forgot-password",
                Component: ForgotPassword,
            },
            {
                path: "otp-verify",
                Component: OTPVerify,
            },
            {
                path: "reset-password",
                Component: ResetPassword,
            }
        ]
    }
]);
export default router;