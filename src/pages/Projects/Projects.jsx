import { projects } from "../../const/projects";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <>
      <Title>My projects</Title>
      <ProjectsContainer>
        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            subtitle={project.subtitle}
            toolsUsed={project.toolsUsed}
          />
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Portfolio;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2.7rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-align: center;
  padding: 40px 0;
`;
