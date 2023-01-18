import React from "react";
import "./TopBar.scss";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import logo from "../../assets/logo-no-background.png";

const TopBar = ({ home, about, portfolio, contact }) => {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      <img className="site-logo" src={logo} alt="Site logo"></img>
      <nav>
        <ul>
          <div className="nav-item" id={home} onClick={() => navigate("/")}>
            <li>Home</li>
          </div>
          <div
            className="nav-item"
            id={about}
            onClick={() => navigate("/about")}
          >
            <li>About</li>
          </div>
          <div
            className="nav-item"
            id={portfolio}
            onClick={() => navigate("/portfolio")}
          >
            <li>Portfolio</li>
          </div>
          <div
            className="nav-item"
            id={contact}
            onClick={() => navigate("/contact")}
          >
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
