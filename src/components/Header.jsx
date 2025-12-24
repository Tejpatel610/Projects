import React from "react";
import 'boxicons/css/boxicons.min.css';
const Header = () => {
  const toggleMenu = () => {
    document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  return (
    <header  className="flex justify-between items-center py-4 px-5 lg:px-20">
      <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className=" text-3xl md:text-4xl lg:text-5xl font-light tracking-wider m-0 cursor-pointer z-50">
       
        TEJPATEL
      </h1>
      {/* desktop navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
          className=" text-base tracking-wider transition-colors duration-500 hover:text-gray-300 z-50 "
          href="https://www.linkedin.com/in/pateltejkirtibhai/"
        >
          ABOUT
        </a>
        
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"
          className=" text-base tracking-wider transition-colors duration-500 hover:text-gray-300 z-50 "
          href="tejpatel.xyz"
        >
          PORTFOLIO
        </a>
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500"
          className=" text-base tracking-wider transition-colors duration-500 hover:text-gray-300 z-50 "
          href="https://github.com/Tejpatel610"
        >
          PROJECTS
        </a>
      </nav>
      <button className="hidden md:block bg-[#a7a7a7] text-black transition-all duration-500 hover:bg-white rounded-full px-8 py-3 font-medium z-50 border-none  cursor-pointer">
        SIGIN
      </button>
      {/*  mobile menu button & menu */ }
      <button className="md:hidden z-50 transition text-3xl p-2 " onClick={toggleMenu}>
       <i class='bx bx-menu' ></i>
      </button>
      {/* mobile menu */}
      <div
        id="mobileMenu"
        className="hidden fixed md:hidden p-5 top-16 right-0 left-0 bottom-0 bg-opacity-70 z-40 backdrop-blur-md bg-black"
      >
        <nav className="flex flex-col gap-6 items-center ">
          <a
          className=" text-base tracking-wider transition-colors duration-500 hover:text-gray-300 z-50 "
          href="linkedin.com/in/pateltejkirtibhai/"
        >
          ABOUT
        </a>
        <a
          className=" text-base tracking-wider transition-colors duration-500 hover:text-gray-300 z-50 "
          href="tejpatel.xyz"
        >
          PORTFOLIO WEBSITE
        </a>
        <a
          className=" text-base tracking-wider transition-colors duration-500 hover:text-gray-300 z-50 "
          href="https://github.com/Tejpatel610"
        >
          PROJECTS
        </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
