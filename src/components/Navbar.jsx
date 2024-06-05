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