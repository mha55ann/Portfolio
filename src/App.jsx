import React from "react";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Project01 from "./components/Project01";
import Project02 from "./components/Project02";
import Project03 from "./components/Project03";
import Experience from "./components/Experience";
import ecomlogo from "./images/ecomlogo.jpg";
import "./App.css";

function App() {
  const Exp1 = {
    main: "Experience",
    title: "E-commerce Store",
    para: "I have built multiple e-commerce projects using React, Tailwind CSS, and Firebase, focusing on seamless UI/UX and responsiveness. My projects include product listings, cart management, and secure checkout functionality. I also integrated REST APIs and payment gateways to enhance the shopping experience.",
    logo: ecomlogo,
    
  };

  const Exp2 = {
    title: "Analytics Dashboard",
    para: "I have built multiple e-commerce projects using React, Tailwind CSS, and Firebase, focusing on seamless UI/UX and responsiveness. My projects include product listings, cart management, and secure checkout functionality. I also integrated REST APIs and payment gateways to enhance the shopping experience.",
    logo: ecomlogo,
  };

  const Exp3 = {
    title: "Social Media Platform",
    para: "I have built multiple e-commerce projects using React, Tailwind CSS, and Firebase, focusing on seamless UI/UX and responsiveness. My projects include product listings, cart management, and secure checkout functionality. I also integrated REST APIs and payment gateways to enhance the shopping experience.",
    logo: ecomlogo,
  };

  return (
    <>
      <Navbar />
      <Home />
      <Project01 />
      <Project02 />
      <Project03 />
      <Experience Exp={Exp1} />
      <Experience Exp={Exp2} />
      <Experience Exp={Exp3} />
    </>
  );
}

export default App;
