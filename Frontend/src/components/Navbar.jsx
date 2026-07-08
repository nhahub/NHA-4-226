// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../assets/assets_frontend/logo.png";
import proile_pic from "../assets/assets_frontend/profile_pic.png";
import dropdown_icon from "../assets/assets_frontend/dropdown_icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 ">
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12 cursor-pointer"
          src={logo}
          alt="Healix Logo"
        />
        <span className="text-3xl cursor-pointer font-bold tracking-tighter  font-display text-primary">
          Healix
        </span>
      </div>

      <ul className="hidden md:flex items-start gap-4 font-medium ">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className=" md:flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 group relative cursor-pointer">
            <img
              className="w-8 rounded-full"
              src={proile_pic}
              alt="Profile Picture"
            />
            <img className="w-2.5 " src={dropdown_icon} alt="Dropdown Icon" />

            <div className="absolute top-0 right-0 pt-8 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
              <div className="min-w-48 bg-stone-100 rounded p-4 flex flex-col gap-4">
                <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer ">My Profile</p>
                <p onClick={() => navigate("/my-appointment")} className="hover:text-black cursor-pointer ">My Appointments</p>
                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer ">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#0451c5] text-white px-7 py-2.5 text-sm font-medium rounded-full hover:bg-[#003580] hidden md:block"
          >
            Create Account
          </button>
        )}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="" />

        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
