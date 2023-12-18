import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const CardContainer = styled(Link)`
  display: flex;
  color: black;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 22px;
  margin: 16px;
  width: auto;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #555;
`;

function Card({ title, description, url }) {
  return (
    <CardContainer to={url}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
}

export default Card;
