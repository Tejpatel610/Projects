import React from "react";
import { IoDiamond } from "react-icons/io5";
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row  items-center justify-between min-h-[calc(90vh-6rem)]">
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=" max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0 ">
        <div className="relative w-[95%] sm:w-47 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className=" absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 ">
            <i class='bx bxs-diamond'></i>
            OPEN TO OPPORTUNITIES
          </div>
        </div>
        {/* main heading */}
        <h1 className=" text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-wider  my-8">TURNING IDEAS INTO
            <br />
            INTRECTIVE INTERFACES
            </h1>
            {/*  */}
            <p className=" text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">Frontend developer focused on building clean, scalable, and user-centric web applications using React and Tailwind CSS.
            </p>
            <div className="  mb-10 flex gap-4 mt-12">
                <a className=" border border-[#2a2a2a] py-2
                sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]" href="mailto:tejpatel610@gmail.com">EXPLORE MY WORK<i class='bx bx-link-external' ></i></a>

                <a className=" border border-[#2a2a2a] py-2
                sm:py-3 px-8 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white" href="mailto:tejpatel610@gmail.com">GET IN TOUCH<i class='bx bx-link-external' ></i></a>
            </div>
      </div>
      {/* model */}
  <Spline data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="4000" className=" absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full " scene="https://prod.spline.design/W4FKEL9PZilP37VG/scene.splinecode" />
  


  
    </main>
  );``
};
export default Hero;
