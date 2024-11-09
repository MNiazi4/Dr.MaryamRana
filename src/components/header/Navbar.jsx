import React, { useState, useEffect } from "react";
import { PopupWidget } from "react-calendly";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll event to toggle fixed navbar and hide info bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Info Bar */}
      <div
        className={`info-bar container-fluid px-5 ${
          isScrolled ? "hidden" : ""
        }`}
      >
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
            <div className="info-bar-text">
              Let's Talk About Your Health
              <i className="fa-solid fa-phone ms-3 me-1"></i>
              0321-1162036, 03450048535
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 text-center text-md-end">
            <div className="info-bar-icons ms-auto">
              <a
                href="https://www.facebook.com/drmaryamraana"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/rannamaryam7/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@dr_maryam_ranna?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+923211162036&text=Hello%20there!"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="http://www.youtube.com/@MaryamRaanaGynaecologist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`navbar "elementor-background-overlay" ${
          isScrolled ? "fixed-navbar" : ""
        }`}
      >
        <div className="logo">
          <img src="./src/assets/logo.png" alt="Logo" className="logo-img" />
          <div className="logo-text">
            <h2>DR. Maryam Ranna</h2>
            <p>Assist. Professor (Obst & gynae)</p>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Appointment Button */}
        <a 
          href="https://calendly.com/rannamaryam7"
          target="_blank"
          rel="noopener noreferrer"
          className="appointment-btn"
        >
          Appointment
        </a>

        <PopupWidget
          url="https://calendly.com/rannamaryam7"
          rootElement={document.getElementById("root")}
          text="Appointment"
          textColor="#ffffff"
          color="#ff85b3"
        />

        {/* Social Media Icons in Hamburger Menu */}
        {isMenuOpen && (
          <div className="social-media-icons">
            <a
              href="https://www.facebook.com/drmaryamraana"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/rannamaryam7/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@dr_maryam_ranna?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="fab fa-tiktok"></i>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=+923211162036&text=Hello%20there!"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="http://www.youtube.com/@MaryamRaanaGynaecologist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
