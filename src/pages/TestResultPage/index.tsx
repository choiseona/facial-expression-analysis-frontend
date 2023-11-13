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
    neutral: number | undefined;
  };
  feedback: {
    happy: number | undefined;
    surprise: number | undefined;
    angry: number | undefined;
    fear: number | undefined;
    sad: number | undefined;
    neutral: number | undefined;
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
        neutral: undefined,
      },
      feedback: {
        happy: undefined,
        surprise: undefined,
        angry: undefined,
        fear: undefined,
        sad: undefined,
        neutral: undefined,
      },
      deviation: undefined,
    },
  ]);

  /*
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
              neutral: item.result.neutral,
            },
            feedback: {
              happy: item.feedback.happy,
              surprise: item.feedback.surprise,
              angry: item.feedback.angry,
              fear: item.feedback.fear,
              sad: item.feedback.sad,
              neutral: item.result.neutral,
            },
            deviation: item.deviation,
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
*/

  useEffect(() => {
    //서버로부터 모든 샘플에 대한 샘플데이터(문구, 사진), 사용자 반응(사진), ai 분석 수치, 사용자 실제 감정 수치 받기
    setResult([
      {
        sampleImg: "/src/assets/image/puppy1.jpg",
        faceImg: "/src/assets/image/puppy1.jpg",
        result: {
          happy: 0.1,
          surprise: 0.1,
          angry: 0.1,
          fear: 0.1,
          sad: 0.1,
          neutral: 0.1,
        },
        feedback: {
          happy: 0.2,
          surprise: 0.2,
          angry: 0.2,
          fear: 0.2,
          sad: 0.2,
          neutral: 0.2,
        },
        deviation: 10,
      },
      {
        sampleImg: "/src/assets/image/puppy2.jpg",
        faceImg: "/src/assets/image/puppy2.jpg",
        result: {
          happy: 0.2,
          surprise: 0.2,
          angry: 0.2,
          fear: 0.2,
          sad: 0.2,
          neutral: 0.2,
        },
        feedback: {
          happy: 0.3,
          surprise: 0.3,
          angry: 0.3,
          fear: 0.3,
          sad: 0.3,
          neutral: 0.3,
        },
        deviation: 20,
      },
      {
        sampleImg: "/src/assets/image/puppy3.jpg",
        faceImg: "/src/assets/image/puppy3.jpg",
        result: {
          happy: 0.3,
          surprise: 0.3,
          angry: 0.3,
          fear: 0.3,
          sad: 0.3,
          neutral: 0.3,
        },
        feedback: {
          happy: 0.4,
          surprise: 0.4,
          angry: 0.4,
          fear: 0.4,
          sad: 0.4,
          neutral: 0.4,
        },
        deviation: 30,
      },
    ]);
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
