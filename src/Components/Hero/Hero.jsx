import React from "react";
import myImage from "../../Assets/Images/restauranfood.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are a family owned Mediterranean resteurant, focused on traditional
        recipes served with a modern twist
      </p>
      <button>Reserve Table</button>
      <img src={myImage} alt="restaurant" />
    </section>
  );
}

export default Hero;
