import React, { useState, useCallback, useEffect } from "react";
import me from "../images/my.png";
import insta from "../images/insta.png";
import Gradient from "../images/gradient.png";
import { IoMail } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";

function Home() {
  const [click, setClicked] = useState(false);

  const handleClick = useCallback(() => {
    setClicked((prev) => !prev); // Toggle menu visibility
  }, []);

  return (
    <div className="relative z-10 id" id="#home">
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
      <div className="bg-[#11071f] flex flex-col items-center relative h-[400px] top-0 ml:h-[380px] sm:h-[320px]">
        <h1 className="absolute text-center text-2xl font-bold py-10 text-white top-[-50px] x:text-2xl w-80 sm:w-auto ml:text-3xl ml:w-[480px]">
          Hello, I am
          <span className="text-[#11071f] text-gradient">
            {" "}
            FRONTEND DEVELOPER
          </span>
        </h1>
        <div className="text-white text-lg text-center px-5 relative top-[80px] sm:w-[640px] sm:text-xl md:w-[740px] md:leading-loose sm:top-[50px] lg:w-[950px]">
          My name is Muhammad Hassan, and I am a Frontend Developer. I have
          worked with various technologies like HTML, CSS, JavaScript, React,
          and Tailwind CSS. I am passionate about building responsive and
          user-friendly Web Applications.
        </div>
        <div className="absolute top-[330px] s:top-[290px] sm:top-[230px] md:top-[210px] ml:top-[260px]">
          {/* Buttons */}
          <button
            className="mr-2 px-4 py-2.5 bg-white text-black rounded-3xl btn-style5"
            onClick={handleClick}
          >
            Get In Touch
          </button>
          <button className="ml-2 px-4 py-2.5 bg-transparent border text-white rounded-3xl btn-style4">
            Download CV
          </button>
        </div>
      </div>

      {click && (
        <div
          onClick={handleClick}
          className="fixed inset-1  bg-white/6 backdrop-blur-sm flex justify-center items-center z-50"
        >
          {" "}
          <div className="  bg-[#11071f]   p-8 rounded-3xl border border-amber-50">
            <div className="flex flex-col items-center">
              <img src={insta} alt="Instagram" className="w-[28%]" />
              <div className="text-white font-bold pt-4 font-primary">
                Connect on Instagram
              </div>

              <div className="grid grid-cols-3  gap-8 mt-4 text-white">
                <a
                  href="https://www.linkedin.com/in/muhammad-hassan-537682264/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="text-5xl" />
                </a>
                <a
                  href="mailto:ha55ansmail525@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoMail className="text-[50px]" />
                </a>
                <a
                  href="https://github.com/mha55ann"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RxGithubLogo className="text-5xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
