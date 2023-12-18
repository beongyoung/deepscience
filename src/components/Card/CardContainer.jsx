import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-content: center;
  justify-content: center;
  justify-items: center;
  list-style: none;
  padding: 0;
  margin: 0 12% 0 12%;
`;

export default CardContainer;
