import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div>Designed by Muhammad Arham Khan</div>
        <div className="circle">
          <a href="#nav">
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
