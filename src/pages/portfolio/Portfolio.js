import React from "react";
import "./portfolio.scss";
import TopBar from "../../components/TopBar.js/TopBar";
import { projects } from "../../const/projects";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <div>
      <TopBar />
      <main>
        <h2>My projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <PortfolioCard
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
