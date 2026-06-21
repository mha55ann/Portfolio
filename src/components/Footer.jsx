import React from "react";
import { motion } from "framer-motion";
import { IoMail } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";

function Footer() {
  const socialLinks = [
    {
      icon: <BsLinkedin className="text-lg" />,
      url: "https://www.linkedin.com/in/muhammad-hassan-537682264/",
      name: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <IoMail className="text-lg" />,
      url: "mailto:ha55ansmail525@gmail.com",
      name: "Email",
      color: "hover:text-red-400",
    },
    {
      icon: <RxGithubLogo className="text-lg" />,
      url: "https://github.com/mha55ann",
      name: "GitHub",
      color: "hover:text-purple-400",
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
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.footer
      id="contact"
      className="bg-[#11071f] border-t border-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm text-white py-8 px-6 sm:px-12">
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Connect
            </span>
          </h2>

          <motion.p
            className="text-base text-white/80 mb-6 leading-relaxed"
            variants={itemVariants}
          >
            Need a{" "}
            <span className="font-medium text-white">Frontend Developer</span>?
            With expertise in{" "}
            <span className="font-medium text-white">
              React and Tailwind CSS
            </span>
            , I build user-friendly, high-performance solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 mb-6"
          variants={itemVariants}
        >
          <IoMail className="text-xl text-purple-400" />
          <a
            href="mailto:ha55ansmail525@gmail.com"
            className="text-base hover:text-purple-300 transition-colors"
          >
            ha55ansmail525@gmail.com
          </a>
        </motion.div>

        <motion.div className="flex gap-5 mb-8" variants={itemVariants}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white/80 ${link.color} transition-colors duration-300`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="pt-4 border-t border-white/10 text-center text-white/60 text-xs"
          variants={itemVariants}
        >
          <p>© {new Date().getFullYear()} Muhammad Hassan</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
