import { NavLink, Outlet } from "react-router";
import img from "../assets/authImage.png";
import logo from "../assets/logo.png";

const AuthLayout = () => {
  return (
    <div className="md:px-8 pt-2 pb-8">

      <NavLink to="/" className="flex items-center">
        <img src={logo} className="w-10" alt="" />
        <h1 className="text-2xl font-bold mt-4 -ml-4">Profast</h1>
      </NavLink>

        {/* main dynamic content */}
      <div className="md:flex items-center justify-center gap-5">
        <div className="md:w-1/2 md:ml-10">
          <Outlet />
        </div>

        <div className="md:w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
