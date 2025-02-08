import React from "react";
import { IoMail } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";

function Footer() {
  return (
    <div id="contact" className="bg-[#11071f]">
      <div className="bg-white/6 backdrop-blur-sm text-white flex flex-col gap-y-5 py-7  px-4 sm:px-[25%]">
        <div className="text-3xl bold">Contact</div>
        <div className="italic text-lg ">
          If you need a <span className="bold">Frontend Developer</span> to
          build responsive websites and dynamic web applications, I'm here to
          help! With expertise in{" "}
          <span className="bold">
            React, Tailwind CSS, and modern frontend frameworks,
          </span>{" "}
          I can create user-friendly and high-performance solutions.{" "}
          <span className="bold">Let’s connect!</span>
        </div>
        <div className="flex gap-3">
          <IoMail className="text-2xl" />
          ha55ansmail525@gmail.com
        </div>
        <div className="flex text-xl gap-3">
          <a
            href="https://www.linkedin.com/in/muhammad-hassan-537682264/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="mailto:ha55ansmail525@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMail />
          </a>
          <a
            href="https://github.com/mha55ann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxGithubLogo />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
