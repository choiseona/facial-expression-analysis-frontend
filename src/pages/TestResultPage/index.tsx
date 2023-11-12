import Graph from "@/components/TestResultpage/Graph";
import ResultStepRadio from "@/components/TestResultpage/ResultStepRadio";
import TestSample from "@/components/TestResultpage/TestSample";
import UserImage from "@/components/TestResultpage/UserImage";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

interface ResultType {
  faceImg: string | undefined;
  sampleImg: string | undefined;
  result: {
    happy: number | undefined;
    surprise: number | undefined;
    angry: number | undefined;
    fear: number | undefined;
    sad: number | undefined;
  };
  feedback: {
    happy: number | undefined;
    surprise: number | undefined;
    angry: number | undefined;
    fear: number | undefined;
    sad: number | undefined;
  };
  deviation: number | undefined;
}

interface Props {
  id: number[] | undefined;
}
function TestResultPage({ id }: Props) {
  const [resultStep, setResultStep] = useState(1);
  const [result, setResult] = useState<ResultType[]>([
    {
      faceImg: undefined,
      sampleImg: undefined,
      result: {
        happy: undefined,
        surprise: undefined,
        angry: undefined,
        fear: undefined,
        sad: undefined,
      },
      feedback: {
        happy: undefined,
        surprise: undefined,
        angry: undefined,
        fear: undefined,
        sad: undefined,
      },
      deviation: undefined,
    },
  ]);

  useEffect(() => {
    //서버로부터 모든 샘플에 대한 샘플데이터(문구, 사진), 사용자 반응(사진), ai 분석 수치, 사용자 실제 감정 수치 받기

    axios
      .post(
        `http://localhost:8080/api/test/result`,
        JSON.stringify({ ids: id }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const data = res.data.results;
        setResult(
          data.map((item: ResultType) => ({
            faceImg: `data:image/jpeg;base64,${item.faceImg}`,
            sampleImg: `data:image/jpeg;base64,${item.sampleImg}`,
            result: {
              happy: item.result.happy,
              surprise: item.result.surprise,
              angry: item.result.angry,
              fear: item.result.fear,
              sad: item.result.sad,
            },
            feedback: {
              happy: item.feedback.happy,
              surprise: item.feedback.surprise,
              angry: item.feedback.angry,
              fear: item.feedback.fear,
              sad: item.feedback.sad,
            },
            deviation: item.deviation,
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <FlexCol>
      <ResultStepRadio resultStep={resultStep} setResultStep={setResultStep} />
      <FlexRow>
        <TestSample image={result[resultStep - 1].sampleImg} />
        <UserImage image={result[resultStep - 1].faceImg} />
      </FlexRow>
      <Graph results={result[resultStep - 1]} />
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
