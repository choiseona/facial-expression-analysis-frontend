import FadeFramerMotion from "@/components/Common/FadeFramerMotion";
import BackgroundVideo from "@components/Homepage/BackgroundVideo";
import ProgramIntroduction from "@components/Homepage/ProgramIntroduction";
import ProgramStartButton from "@components/Homepage/ProgramStartButton";
import styled from "styled-components";

function HomePage() {
  return (
    <FadeFramerMotion>
      <BackgroundVideo />
      <FlexCenter>
        <FlexColumn>
          <FlexEnd>
            <ProgramIntroduction />
          </FlexEnd>
          <FlexEnd>
            <ProgramStartButton />
          </FlexEnd>
        </FlexColumn>
      </FlexCenter>
    </FadeFramerMotion>
  );
}

export default HomePage;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 40%;
  margin-right: 5%;
  gap: 10px;
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: end;
`;
