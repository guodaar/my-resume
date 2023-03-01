import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton/CustomButton";
import logo from "../assets/logo-no-background.png";
import { CONTACT_PATH, HOME_PATH, PROJECTS_PATH } from "../routes/const";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo as={Link} to={HOME_PATH}>
        <img src={logo} alt="site logo" />
      </Logo>
      <Navigation>
        <NavItem as={Link} to={HOME_PATH}>
          Home
        </NavItem>
        <NavItem as={Link} to={PROJECTS_PATH}>
          Projects
        </NavItem>
        <NavItem as={Link} to={CONTACT_PATH}>
          Contact
        </NavItem>
        <CustomButton onClick={() => navigate(CONTACT_PATH)}>
          Contact Now
        </CustomButton>
      </Navigation>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const Logo = styled.div`
  img {
    width: 200px;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 3px;
`;

const NavItem = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: black;
  padding: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 96%;
    transform: scaleX(0);
    height: 2px;
    bottom: 4px;
    left: 0;
    background-color: seagreen;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: seagreen;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
