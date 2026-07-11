// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  // Helper function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* ----------- Left Section ----------- */}
        <div>
          <div className="flex items-center gap-2">
            <img className="h-12 w-12 cursor-pointer" src={assets.logo} alt="Healix Logo" />
            <span className="text-3xl cursor-pointer font-bold tracking-tighter font-display text-primary">
              Healix
            </span>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6 mt-4">
            Healix is the world's leading clinic management system, built to

            provide a seamless sanctuary for both healthcare providers and their

            patients. We prioritize clarity, care, and efficiency in every

            digital interaction.
          </p>
        </div>

        {/* ----------- Center Section ----------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              {/* Added onClick handler to every link */}
              <Link to="/" onClick={scrollToTop} className="hover:text-black transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop} className="hover:text-black transition-all">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop} className="hover:text-black transition-all">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="#" onClick={scrollToTop} className="hover:text-black transition-all">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        {/* ----------- Right Section ----------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ----------- Copyright Text ----------- */}
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-500">
          Copyright © 2024 Healix - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
