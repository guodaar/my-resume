import styled from "styled-components";
import TopBar from "./TopBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export default MainLayout;

const ContentWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 20px 5vw;
`;
