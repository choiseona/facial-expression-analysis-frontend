import styled from "styled-components";

function ProgramIntroduction() {
  return (
    <Introduction>
      Analyzing Errors <br />
      in Facial Expression Analysis
      <br />
      Based on Facial Recognition
    </Introduction>
  );
}

export default ProgramIntroduction;

const Introduction = styled.h1`
  z-index: 20;
  color: #cecccc;
  line-height: 3.5rem;
  font-size: 2.3rem;
`;
