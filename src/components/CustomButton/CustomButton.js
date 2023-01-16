import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, onClick }) => {
  return (
    <div>
      <button className="custom-button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
