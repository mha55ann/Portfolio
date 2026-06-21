import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
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
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </>
  );
}

export default App;
