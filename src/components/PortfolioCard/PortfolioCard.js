import React from "react";
import "./PortfolioCard.scss";
import CustomButton from "../CustomButton/CustomButton";

const PortfolioCard = ({ image, title, subtitle }) => {
  return (
    <div className="portfolio-container">
      <div className="image-wrap">
        <img src={image} alt={title} />
      </div>
      <div className="info-wrap">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <CustomButton>View project</CustomButton>
      </div>
    </div>
  );
};

export default PortfolioCard;
