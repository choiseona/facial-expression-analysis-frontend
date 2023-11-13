import FadeFramerMotion from "@/components/Common/FadeFramerMotion";
import TestNotifincation from "@/components/TestPreparepage/TestNotification";
import TestStartButton from "@/components/TestPreparepage/TestStartButton";
import Webcam from "@/components/TestPreparepage/Webcam";
import styled from "styled-components";

function TestPreparePage() {
  return (
    <FadeFramerMotion>
      <FlexCenter>
        <FlexColumn>
          <Flex>
            <Webcam />
            <TestNotifincation />
          </Flex>
          <FlexEnd>
            <TestStartButton />
          </FlexEnd>
        </FlexColumn>
      </FlexCenter>
    </FadeFramerMotion>
  );
}

export default TestPreparePage;

const FlexCenter = styled.div`
  max-width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  gap: 5px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: end;
`;
