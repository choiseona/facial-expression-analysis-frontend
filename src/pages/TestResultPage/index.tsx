import Graph from "@/components/TestResultpage/Graph";
import ResultStepRadio from "@/components/TestResultpage/ResultStepRadio";
import TestSample from "@/components/TestResultpage/TestSample";
import UserImage from "@/components/TestResultpage/UserImage";
import { useState } from "react";
import styled from "styled-components";

function TestResultPage() {
  const [resultStep, setResultStep] = useState(1);
  return (
    <FlexCol>
      <ResultStepRadio resultStep={resultStep} setResultStep={setResultStep} />
      <FlexRow>
        <TestSample />
        <UserImage />
      </FlexRow>
      <Graph resultStep={resultStep} />
    </FlexCol>
  );
}

const FlexCol = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
`;

export default TestResultPage;
