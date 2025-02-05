import React from "react";
import me from "../images/my.png";
import Gradient from "../images/gradient.png";

function Home() {
  return (
    // grid
    <div className="grid grid-cols-1 grid-rows-2 relative z-10">
      {/* First Row */}
      <div className="bg-[#11071f] flex justify-center items-center relative">
        <div className="w-[250px] absolute z-20">
          <div className="group perspective">
            <div className="relative w-[250px] h-[250px] transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div
                className="absolute inset-0"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={me}
                  width={250}
                  height={250}
                  className="rounded-full w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* Back Side (Same Image Flipped) */}
              <div
                className="absolute inset-0 transform rotate-y-180"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={me}
                  width={250}
                  height={250}
                  className="rounded-full w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[320px]">
          <img src={Gradient} width={320} alt="" />
        </div>
      </div>

      {/* Second Row */}
      <div className="bg-[#11071f] flex flex-col items-center relative ">
        <h1 className="text-center text-2xl font-bold py-10 text-white x:text-2xl w-80 sm:w-auto ml:text-3xl ml:w-auto">
          Hello, I am
          <span className="text-[#11071f] text-gradient"> FRONTEND DEVELOPER</span>
        </h1>
        <div className="text-white text-lg  text-last-center px-5 absolute top-30 font-primary sm:w-[640px] sm:top-25 text-center sm:text-xl md:w-[740px] ">
          My name is Muhammad Hassan, and I am a Frontend Developer. I have
          worked with various technologies like HTML, CSS, JavaScript, React,
          and Tailwind CSS. I am passionate about building responsive and
          user-friendly Web Applications.
        </div>
      </div>
    </div>
  );
}
export default Home;
