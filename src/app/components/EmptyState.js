import styled from "styled-components";
import CopyImage from "../../assets/images/search.png";

const EmptyImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & > img {
    max-width: 10%;
  }
`;

export const EmptyState = ({ text }) => {
  return (
    <EmptyImageWrapper>
      <img src={CopyImage} alt="No data" />
      <h3>There are no {text}, Check Later</h3>
    </EmptyImageWrapper>
  );
};
