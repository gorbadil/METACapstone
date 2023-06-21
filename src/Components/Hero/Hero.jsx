import React from "react";
import "./Hero.css";
import resImage from "../../Assests/Images/restauranfood.jpg";

function Hero() {
  return (
    <section id="hero">
      <div className="overlay">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean resteurant, focused on traditional
          recipes served with a modern twist
        </p>
        <button>Reserve Table</button>
      </div>
      <img src={resImage} alt="Restauran Food" className="res-image" />
    </section>
  );
}

export default Hero;
