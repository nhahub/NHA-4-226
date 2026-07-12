import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0451C5]
via-[#2563EB]
to-[#3B82F6] rounded-3xl mt-6">

      {/* Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 min-h-[78vh] flex flex-col-reverse lg:flex-row items-center justify-between py-10">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex-1 text-center lg:text-left py-8"
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>

            <span className="text-white font-medium">
              Trusted Healthcare Platform
            </span>
          </div>

          <h1 className="text-white text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight">
            Book Your <br />

            <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent">
              Appointment
            </span>

            <br />

            With Trusted Doctors
          </h1>

          <p className="mt-6 text-blue-100 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
            Connect with experienced doctors, book appointments in seconds,
            and receive trusted healthcare from anywhere, anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

            <a
              href="#speciality"
              className="flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              Book Appointment

              <img
                src={assets.arrow_icon}
                className="w-4"
                alt=""
              />
            </a>

<button
  onClick={() => {
    navigate("/doctors");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  className="border border-white/40 backdrop-blur-lg bg-white/10 text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary duration-300"
>
  Explore Doctors
</button>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center items-center relative py-8"
        >

          <div className="absolute w-[350px] h-[350px] bg-cyan-300/20 blur-[120px] rounded-full"></div>

          <div className="absolute w-52 h-52 rounded-full bg-cyan-400 opacity-20 blur-[100px] top-0 right-16"></div>

          <div className="absolute w-40 h-40 rounded-full bg-blue-500 opacity-20 blur-[80px] bottom-12 left-10"></div>

          <img
            src={assets.header_img}
            alt=""
            className="relative z-10 w-[88%] lg:w-[92%] max-w-lg animate-float drop-shadow-[0_30px_80px_rgba(0,0,0,.35)]"
          />

        </motion.div>

      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center">

        <span className="text-blue-100 text-sm mb-2">
          Scroll Down
        </span>

        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center">

          <div className="w-1 h-2 rounded-full bg-white mt-2 animate-bounce"></div>

        </div>

      </div>

    </section>
  );
};

export default Header;