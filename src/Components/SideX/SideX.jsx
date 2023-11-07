import React, { useState } from "react";
import "./SideX.scss";
import ToggleBtn from "../ToggleBtn/ToggleBtn";

const SideX = () => {
  const [open, setOpen] = useState(false);

  // Determine the animation class based on the "open" state
  const animationClass = open
    ? "animate__slideInRight"
    : "animate__slideOutRight";

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="sideX" onClick={handleClick}>
      <div className={`bg animate__animated ${animationClass}`}>
        <ul className="links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <ToggleBtn setOpen={setOpen} open={open} />
    </div>
  );
};

export default SideX;
