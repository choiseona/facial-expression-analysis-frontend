import Graph from "@/components/TestResultpage/Graph";
import ResultStepRadio from "@/components/TestResultpage/ResultStepRadio";
import TestSample from "@/components/TestResultpage/TestSample";
import UserImage from "@/components/TestResultpage/UserImage";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ResultType } from "@/global/type";
import getResults from "@/apis/getResults";
import { initialResult, testResult } from "@/global/data";
import FadeFramerMotion from "@/components/Common/FadeFramerMotion";

interface Props {
  id: number[] | undefined;
}
function TestResultPage({ id }: Props) {
  const [resultStep, setResultStep] = useState(1);
  const [result, setResult] = useState<ResultType[]>([initialResult]);

  /*
  useEffect(() => {
    getResults({ id, setResult });
  }, []);
*/

  useEffect(() => {
    setResult(testResult);
  }, []);

  return (
    <FadeFramerMotion>
      <FlexCol>
        <ResultStepRadio
          resultStep={resultStep}
          setResultStep={setResultStep}
        />
        <FadeFramerMotion key={resultStep}>
          <FlexRow>
            <TestSample image={result[resultStep - 1].sampleImg} />
            <UserImage image={result[resultStep - 1].faceImg} />
          </FlexRow>
        </FadeFramerMotion>
        <Graph results={result[resultStep - 1]} />
      </FlexCol>
    </FadeFramerMotion>
  );
}

const FlexCol = styled.div`
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 900px;
  margin: 0 auto;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  width: 100%;
`;

export default TestResultPage;
