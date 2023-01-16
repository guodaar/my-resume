import React from "react";
import "./TopBar.scss";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      <h1>My logo</h1>
      <nav>
        <ul>
          <div className="nav-item" onClick={() => navigate("/")}>
            <li>Home</li>
          </div>
          <div className="nav-item" onClick={() => navigate("/about")}>
            <li>About</li>
          </div>
          <div className="nav-item" onClick={() => navigate("/portfolio")}>
            <li>Portfolio</li>
          </div>
          <div className="nav-item" onClick={() => navigate("/contact")}>
            <li>Contact</li>
          </div>
          <div className="contact-now" onClick={() => navigate("/contact")}>
            <CustomButton>Contact Now</CustomButton>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
