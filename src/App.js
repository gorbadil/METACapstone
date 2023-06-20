import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Highlights from "./Components/Highlights/Highlights";
import Testimonials from "./Components/Testimonials/Testimonials";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <React.Fragment className="App">
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;
