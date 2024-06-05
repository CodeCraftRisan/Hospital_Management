import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigateTo = useNavigate();

  const handleMenuToggle = () => {
    setShow(!show); // Toggle menu visibility on hamburger click
  };

  const goToLogin = () => {
    navigateTo("/login"); // Navigate to login page
  };

  return (
    <>
      <nav className={"container"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={handleMenuToggle}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={handleMenuToggle}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={handleMenuToggle}>
              About Us
            </Link>
          </div>
          <button className="loginBtn btn" onClick={goToLogin}>
            LOGIN
          </button>
        </div>
        <div className="hamburger" onClick={handleMenuToggle}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;