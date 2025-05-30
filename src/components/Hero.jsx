import React from "react";
import heroImg from "../assets/header.png";
import logo2 from "../assets/logo2.png";

const Hero = () => {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto py-12 sm:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <img
            src={logo2}
            alt="logo"
            className="mx-auto lg:mx-0 w-[280px] sm:w-[400px] md:w-[460px] lg:w-[497px] h-auto mb-6"
          />

          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button className="bg-red-500 text-white px-6 sm:px-8 py-3 rounded shadow hover:bg-red-600 transition font-semibold text-sm sm:text-base">
            Забронировать
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={heroImg}
            alt="Hotel Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
