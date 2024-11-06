import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ setShowSearch, getCartCount }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 container">
      <Link to="/">
        <img src={assets.logo} className="w-36 logo" alt="" />
      </Link>

      <ul className=" hidden nav sm:flex gap-5 text-sm text-neutral-800">
        <NavLink to="/" className="flex flex-col items-center ">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center ">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center ">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center ">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 search cursor-pointer"
          alt=""
        />

        <div className="group relative">
          <Link to="/login">
            <img
              className="w-5 cursor-pointer mx-5  "
              src={assets.profile_icon}
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right 0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-5 px-5  bg-slate-300 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative cart">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-7px] bottom-[-5px] w-4 landing-4 aspect-square rounded-full">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden mx-5"
          alt=""
        />
      </div>

      {/* Sidebar menu for small screen  */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-slate-800">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p className="text-black">Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-black"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-black"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-black"
            to="/collection"
          >
            Collection
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-black"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
