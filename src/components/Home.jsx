import React from "react";
import me from "../images/my.png";
import Gradient from "../images/gradient.png";

function Home() {
  return (
    <div className=" relative z-10">
      {/* First Row */}
      <div className="bg-[#11071f] flex justify-center items-center relative h-[400px] top-0">
        <div className="w-[250px] absolute z-20">
          <div className="group perspective">
            <div className="relative w-[250px] h-[250px] transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden">
                <img
                  src={me}
                  width={250}
                  height={250}
                  className="rounded-full w-full h-full object-cover"
                  alt="Profile"
                />
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden">
                <img
                  src={me}
                  width={250}
                  height={250}
                  className="rounded-full w-full h-full object-cover"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[320px]">
          <img src={Gradient} width={320} alt="Gradient Background" />
        </div>
      </div>

      {/* Second Row */}
      <div className="bg-[#11071f] flex flex-col items-center relative  h-[400px] top-0 ml:h-[380px] sm:h-[320px]">
        <h1 className="absolute text-center text-2xl font-bold py-10 text-white top-[-50px] x:text-2xl w-80 sm:w-auto ml:text-3xl ml:w-[480px]">
          Hello, I am
          <span className="text-[#11071f] text-gradient">
            {" "}
            FRONTEND DEVELOPER
          </span>
        </h1>
        <div className="text-white text-lg text-center px-5 relative top-[80px] sm:w-[640px] sm:text-xl md:w-[740px] md:leading-loose sm:top-[50px] lg:w-[950px] ">
          My name is Muhammad Hassan, and I am a Frontend Developer. I have
          worked with various technologies like HTML, CSS, JavaScript, React,
          and Tailwind CSS. I am passionate about building responsive and
          user-friendly Web Applications.
        </div>
        <div className="absolute top-[330px] s:top-[290px] sm:top-[230px] md:top-[210px] ml:top-[260px]">
          <button className="mr-2 px-4 py-2.5 bg-white text-black rounded-3xl btn-style5">
          Get In Touch
          </button>
          <button className="ml-2 px-4 py-2.5 bg-transparent border  text-white rounded-3xl btn-style4 ">
          Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
