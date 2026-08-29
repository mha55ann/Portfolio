import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Research from "./components/Research";
import Certificates from "./components/Certificates";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Research />
      <Certificates />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </>
  );
}

export default App;
