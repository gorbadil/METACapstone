import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import "./App.css";

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
