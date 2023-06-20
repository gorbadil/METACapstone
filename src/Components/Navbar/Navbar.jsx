import React from "react";
import { ReactComponent as Logo } from "../../Assests/Icons/Logo.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero">
        {" "}
        <Logo className="logo" />{" "}
      </a>

      <ul className="nav-ul">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#highlights">Menu</a>
        </li>
        <li>
          <a href="#res">Reservation</a>
        </li>
        <li>
          <a href="#footer">Order Online</a>
        </li>
        <li>
          <a href="#footer">Login</a>
        </li>
      </ul>
    </nav>
  );
}
