import Graph from "@/components/TestResultpage/Graph";
import ResultStepRadio from "@/components/TestResultpage/ResultStepRadio";
import TestSample from "@/components/TestResultpage/TestSample";
import UserImage from "@/components/TestResultpage/UserImage";
import { useState, useEffect } from "react";
import styled from "styled-components";

function TestResultPage() {
  const [resultStep, setResultStep] = useState(1);
  const [result, setResult] = useState<
    {
      base64Image: string | undefined;
      comment: string | undefined;
      userImage: string | undefined;
      ai: {
        happy: number | undefined;
        surprise: number | undefined;
        angry: number | undefined;
        fear: number | undefined;
        sad: number | undefined;
      };
      user: {
        happy: number | undefined;
        surprise: number | undefined;
        angry: number | undefined;
        fear: number | undefined;
        sad: number | undefined;
      };
      error: number | undefined;
    }[]
  >([
    {
      base64Image: undefined,
      comment: undefined,
      userImage: undefined,
      ai: {
        happy: undefined,
        surprise: undefined,
        angry: undefined,
        fear: undefined,
        sad: undefined,
      },
      user: {
        happy: undefined,
        surprise: undefined,
        angry: undefined,
        fear: undefined,
        sad: undefined,
      },
      error: undefined,
    },
  ]);

  useEffect(() => {
    //서버로부터 모든 샘플에 대한 샘플데이터(문구, 사진), 사용자 반응(사진), ai 분석 수치, 사용자 실제 감정 수치 받기
    setResult([
      {
        base64Image: "/src/assets/image/puppy1.jpg",
        comment: "테스트1",
        userImage: "/src/assets/image/puppy1.jpg",
        ai: {
          happy: 0.1,
          surprise: 0.1,
          angry: 0.1,
          fear: 0.1,
          sad: 0.1,
        },
        user: {
          happy: 0.2,
          surprise: 0.2,
          angry: 0.2,
          fear: 0.2,
          sad: 0.2,
        },
        error: 10,
      },
      {
        base64Image: "/src/assets/image/puppy2.jpg",
        comment: "테스트2",
        userImage: "/src/assets/image/puppy2.jpg",
        ai: {
          happy: 0.2,
          surprise: 0.2,
          angry: 0.2,
          fear: 0.2,
          sad: 0.2,
        },
        user: {
          happy: 0.3,
          surprise: 0.3,
          angry: 0.3,
          fear: 0.3,
          sad: 0.3,
        },
        error: 20,
      },
      {
        base64Image: "/src/assets/image/puppy3.jpg",
        comment: "테스트3",
        userImage: "/src/assets/image/puppy3.jpg",
        ai: {
          happy: 0.3,
          surprise: 0.3,
          angry: 0.3,
          fear: 0.3,
          sad: 0.3,
        },
        user: {
          happy: 0.4,
          surprise: 0.4,
          angry: 0.4,
          fear: 0.4,
          sad: 0.4,
        },
        error: 30,
      },
    ]);
  }, []);

  return (
    <FlexCol>
      <ResultStepRadio resultStep={resultStep} setResultStep={setResultStep} />
      <FlexRow>
        <TestSample
          image={result[resultStep - 1].base64Image}
          comment={result[resultStep - 1].comment}
        />
        <UserImage image={result[resultStep - 1].userImage} />
      </FlexRow>
      <Graph result={result[resultStep - 1]} />
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
