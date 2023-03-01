import styled from "styled-components";

const ImageFigure = ({ image, alt }) => {
  return (
    <Container>
      <figure>
        <img src={image} alt={alt} />
      </figure>
    </Container>
  );
};

export default ImageFigure;

const Container = styled.div`
  flex: 1.3;

  img {
    width: 100%;
    object-fit: contain;
  }

  figure {
    display: inline-flex;
    outline: 2px solid black;
    transition: box-shadow 0.3s ease-in-out;
  }

  figure:hover {
    box-shadow: 6px 6px 0 -1px #373737;
  }
`;
