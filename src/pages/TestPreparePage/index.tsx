import Background from "@/components/Common/Background";
import Header from "@/components/Common/Header";
import TestNotifincation from "@/components/TestPreparepage/TestNotification";
import Webcam from "@/components/TestPreparepage/Webcam";
import styled from "styled-components";

function TestPreparePage() {
  return (
    <Background>
      <Header />
      <FlexColumn>
        <Webcam />
        <TestNotifincation />
      </FlexColumn>
    </Background>
  );
}

export default TestPreparePage;

const FlexColumn = styled.div`
  display: flex;
  gap: 5px;
`;
