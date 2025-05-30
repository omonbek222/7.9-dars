import React from "react";
import aboutImg from '../assets/about.png'; 

const About = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <section className="max-w-7xl mx-auto py-12 sm:py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
            О гостинице
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            Мы находимся в самом центре города, вблизи Байкала. Наша гостиница
            предлагает уютные номера, высококлассный сервис и атмосферу уюта. Мы
            подходим как для туристов, так и для деловых поездок.
          </p>
          <button className="bg-blue-800 text-white px-6 sm:px-8 py-3 rounded hover:bg-blue-900 transition font-semibold text-sm sm:text-base">
            Подробнее
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={aboutImg}
            alt="About Hotel"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full h-auto mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
