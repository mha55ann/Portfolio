import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "../images/signature.png";
import { TiThMenu, TiTimes } from "react-icons/ti";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Tech Stack", href: "/#tech-stack" },
    { name: "Research", href: "/#research" },
    { name: "Certificates", href: "/#certificates" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Education", href: "/#education" },
    { name: "WeChat", href: "/wechat" },
    { name: "Contact", href: "/#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#11071f]/90 backdrop-blur-md py-2" : "bg-[#11071f] py-4"
      } ${isOpen ? "bg-[#11071f]" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="z-50">
          <a href="/#home" onClick={closeMenu}>
            <img src={images} alt="Logo" width={80} className="hover:opacity-80 transition-opacity" />
          </a>
        </motion.div>

        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <motion.li key={link.name} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <a
                href={link.href}
                className="text-white hover:text-purple-300 transition-colors duration-300 font-medium text-lg relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden z-50 text-white focus:outline-none"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isOpen ? <TiTimes className="w-8 h-8" /> : <TiThMenu className="w-8 h-8" />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed inset-0 bg-[#11071f] pt-24 px-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ul className="flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full text-center">
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-3 text-xl text-white hover:text-purple-300 transition-colors border-b border-white/10 w-full"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
