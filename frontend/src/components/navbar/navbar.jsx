
import "./navbar.css";
import { TiThMenu } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { RiLoginCircleFill } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { FaHome } from "react-icons/fa";

import logoImg from "../images/WhatsApp Image 2026-05-07 at 11.13.13 PM.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="main">
      {/* Left Section */}
      <div className="left-nav">
        <div className="logo-image">
          <img src={logoImg} alt="ativishala-img" />
        </div>
        <div className="org-name">
          <h1>Ativishala</h1>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-bar" onClick={toggleMenu}>
        <TiThMenu />
      </div>

      {/* Right Section */}
      <div className={`right-nav ${isOpen ? "show" : ""}`}>
        <ul className="ul">
          <Link to="/"><li className="li"><FaHome /> </li></Link>
          <Link to="/about"><li className="li">About</li></Link>
          <Link to="/services"><li className="li">Services</li></Link>
          <Link to="/contact"><li className="li"><GrContact /> </li></Link>
          <Link to="/login"><li className="li"><RiLoginCircleFill /> Login</li></Link>
          <Link to="/profile"><li className="li"><CgProfile /> </li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
