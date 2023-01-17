import React from "react";
import "./PortfolioCard.scss";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

const PortfolioCard = ({ id, image, title, subtitle, toolsUsed }) => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`/portfolio/${id}`);

  return (
    <div className="portfolio-container">
      <div className="image-wrap">
        <figure>
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="info-wrap">
        <ul className="tool-list">
          {toolsUsed.map((tool) => (
            <li className="tool" key={tool}>
              {tool}
            </li>
          ))}
        </ul>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <CustomButton onClick={() => handleClick(id)}>
          View project
        </CustomButton>
      </div>
    </div>
  );
};

export default PortfolioCard;
