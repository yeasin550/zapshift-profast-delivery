import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import useAuth from "../Hooks/UseAuth";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const menu = [
    { name: "Home", path: "/" },
    { name: "My Parcel", path: "/dashboard/myParcel" },
    { name: "My Payment", path: "/dashboard/mypayment" },
  ];

  return (
    <div className="h-screen flex bg-gray-100">
      {/* 🔥 Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-gray-900 text-white shadow-xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Profile */}
        <NavLink to="/" className="flex items-center ml-17 mt-1">
          <img src="/src/assets/logo.png" className="w-8" alt="" />
          <h1 className="text-2xl font-bold mt-2 -ml-4">Profast</h1>
        </NavLink>

        <p className="text-sm text-gray-400 text-center">{user?.email}</p>

        {/* Menu */}
        <div className="p-4 space-y-2">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition ${
                  isActive ? "bg-indigo-500 text-white" : "hover:bg-gray-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* 🔥 Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}

      {/* 🔥 Main */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* 🔹 Top Bar */}
        <div className="sticky top-0 z-50 bg-white shadow flex items-center justify-between px-4 py-3">
          {/* 3 Dot Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition text-xl"
          >
            ⋮
          </button>

          <h1 className="text-lg font-semibold hidden lg:block">Dashboard</h1>

          {/* User Avatar */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {/* 🔹 Content */}
        <div className="p-6 overflow-auto flex-1">
          <div className="bg-white rounded-2xl shadow p-6 min-h-75">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
