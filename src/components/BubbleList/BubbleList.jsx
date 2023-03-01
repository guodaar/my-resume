import styled from "styled-components";

const BubbleList = ({ list }) => {
  return (
    <Container>
      {list.map((tool) => (
        <Tool key={tool}>{tool}</Tool>
      ))}
    </Container>
  );
};

export default BubbleList;

const Container = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Tool = styled.li`
  background-color: rgba(56, 151, 97, 0.2);
  border-radius: 20px;
  padding: 3px 15px;
`;
