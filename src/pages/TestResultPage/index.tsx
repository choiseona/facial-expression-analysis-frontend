import Graph from "@/components/TestResultpage/Graph";
import ResultStepRadio from "@/components/TestResultpage/ResultStepRadio";
import TestSample from "@/components/TestResultpage/TestSample";
import UserImage from "@/components/TestResultpage/UserImage";
import { useEffect } from "react";
import styled from "styled-components";
import getResults from "@/apis/getResults";
import { testResult } from "@/global/data";
import FadeFramerMotion from "@/components/Common/FadeFramerMotion";
import { useAtomValue, useSetAtom } from "jotai";
import { idsAtom, resultStepAtom, resultsAtom } from "@/global/store";

function TestResultPage() {
  const ids = useAtomValue(idsAtom);
  const setResult = useSetAtom(resultsAtom);
  const resultStep = useAtomValue(resultStepAtom);

  /*
  useEffect(() => {
    getResults({ ids, setResult });
  }, []);
  */

  useEffect(() => {
    setResult(testResult);
  }, []);

  return (
    <FadeFramerMotion>
      <FlexCol>
        <ResultStepRadio />
        <FadeFramerMotion key={resultStep}>
          <FlexRow>
            <TestSample />
            <UserImage />
          </FlexRow>
        </FadeFramerMotion>
        <Graph />
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
