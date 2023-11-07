import React, { useState, useEffect } from "react";
import "./navbar.scss";
import SideX from "../SideX/SideX";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`} id="nav">
      <div className="wrapper">
        <span>
          <SideX />
          Arham
        </span>
        <div className="nav-links"></div>
      </div>
    </div>
  );
};

export default Navbar;
