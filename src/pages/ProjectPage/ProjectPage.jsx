import React from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../utils/getProject";
import styled from "styled-components";
import ImageFigure from "../../components/ImageFigure/ImageFigure";
import BubbleList from "../../components/BubbleList/BubbleList";

const ProjectPage = () => {
  const { id } = useParams();
  const project = getProjectById(Number(id));
  const toolsUsed = project.toolsUsed;

  return (
    <>
      <Title>{project.title}</Title>
      <Container>
        <ImageFigure image={project.image} alt={project.subtitle} />
        <InfoSide>
          <Subtitle>{project.subtitle}</Subtitle>
          <BubbleList list={toolsUsed} />
          <p className="description">{project.description}</p>
        </InfoSide>
      </Container>
    </>
  );
};

export default ProjectPage;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3vw;
  margin: 0 7vw;
`;

const InfoSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 2.7rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-align: center;
  padding: 40px 0;
`;

const Subtitle = styled.h3`
  text-transform: capitalize;
  font-size: 2rem;
`;
