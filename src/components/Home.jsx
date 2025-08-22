import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import me from "../images/my.png";
import insta from "../images/insta.png";
import cv from "../images/Muhammad Hassan Resume.pdf";
import Gradient from "../images/Gradient.png";
import { IoMail } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";
import { FiDownload } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";

function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContact = useCallback(() => {
    setIsContactOpen((prev) => !prev);
  }, []);

  const socialLinks = [
    {
      icon: <BsLinkedin className="text-4xl sm:text-5xl" />,
      url: "https://www.linkedin.com/in/muhammad-hassan-537682264/",
      name: "LinkedIn",
    },
    {
      icon: <IoMail className="text-4xl sm:text-5xl" />,
      url: "mailto:ha55ansmail525@gmail.com",
      name: "Email",
    },
    {
      icon: <RxGithubLogo className="text-4xl sm:text-5xl" />,
      url: "https://github.com/mha55ann",
      name: "GitHub",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative z-10 overflow-hidden">
      {/* Hero Section */}
      <div className="bg-[#11071f] min-h-screen flex flex-col justify-center items-center pt-20 pb-16 px-4">
        {/* Profile Image with 3D Effect */}
        <motion.div
          className="relative z-20 mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 group perspective-1000">
            <motion.div
              className="relative w-full h-full transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-180"
              whileHover={{ scale: 1.05 }}
            >
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-purple-400/30 shadow-lg">
                <img
                  src={me}
                  className="w-full h-full object-cover"
                  alt="Muhammad Hassan"
                />
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-full overflow-hidden border-4 border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-white font-bold text-lg">
                    Frontend Developer
                  </p>
                  <p className="text-purple-300 mt-2">
                    Let's build something amazing!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <img
            src={Gradient}
            className="absolute -z-10 w-80 sm:w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="Gradient background"
          />
        </motion.div>

        {/* Introduction Text */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Muhammad Hassan
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 px-4"
            variants={itemVariants}
          >
            I'm a passionate Frontend Developer specializing in creating
            responsive and user-friendly web applications using modern
            technologies like React, JavaScript, and Tailwind CSS.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleContact}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Get In Touch
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={cv} // Replace with actual CV path
              className="px-8 py-3 bg-transparent border border-purple-400 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-purple-900/20 transition-all"
            >
               Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleContact}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#11071f] border border-purple-400/30 rounded-xl p-8 max-w-md w-full relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>

              <div className="relative z-10 flex flex-col items-center">
                <img src={insta} alt="Contact" className="w-24 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Let's Connect!
                </h3>
                <p className="text-white/80 mb-6 text-center">
                  Feel free to reach out through any of these platforms
                </p>

                <div className="grid grid-cols-3 gap-6 w-full">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex flex-col items-center text-white hover:text-purple-300 transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>

                <button
                  onClick={toggleContact}
                  className="mt-8 px-6 py-2 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Home;
