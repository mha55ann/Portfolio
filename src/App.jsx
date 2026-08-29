import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Research from "./components/Research";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <TechStack />
      <Research />
      <Certificates />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </>
  );
}

export default App;
