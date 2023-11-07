import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ToggleBtn = ({ setOpen, open }) => {
  return (
    <div onClick={() => setOpen((prev) => !prev)}>
      <FontAwesomeIcon icon={open ? faCircleXmark : faBars} size="l" />
    </div>
  );
};

export default ToggleBtn;
