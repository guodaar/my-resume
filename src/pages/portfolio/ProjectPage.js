import React from "react";
import "./projectPage.scss";
import { useParams } from "react-router-dom";
import TopBar from "../../components/TopBar.js/TopBar";
import { getProjectById } from "../../utils/getProject";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/portfolio");
  const { id } = useParams();
  const project = getProjectById(Number(id));
  const toolsUsed = project.toolsUsed;

  return (
    <div>
      <TopBar portfolio="active" />
      <div className="project-display">
        <div className="go-back" onClick={() => handleClick()}>
          <BsArrowLeft />
          <p>Go back</p>
        </div>
        <h2>{project.title}</h2>
        <div className="content-wrap">
          <div className="image-wrap">
            <figure>
              <img src={project.image} alt={project.title} />
            </figure>
          </div>
          <div className="info-wrap">
            <h3>{project.subtitle}</h3>
            <ul className="tool-list">
              {toolsUsed.map((tool) => (
                <li className="tool" key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
            <p className="description">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
