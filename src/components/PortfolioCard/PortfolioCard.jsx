import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ImageFigure from "../ImageFigure/ImageFigure";
import BubbleList from "../BubbleList/BubbleList";

const PortfolioCard = ({ id, image, title, subtitle, toolsUsed }) => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`/portfolio/${id}`);

  return (
    <Container>
      <ImageFigure image={image} alt={subtitle} />
      <InfoSide>
        <BubbleList list={toolsUsed} />
        <Title>{title}</Title>
        <p>{subtitle}</p>
        <CustomButton onClick={() => handleClick(id)}>
          View project
        </CustomButton>
      </InfoSide>
    </Container>
  );
};

export default PortfolioCard;

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
  text-transform: capitalize;
  font-size: 2rem;
`;
