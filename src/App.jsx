import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Services />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
