import { resultStepAtom, resultsAtom } from "@/global/store";
import { ResultType } from "@/global/type";
import { useAtomValue } from "jotai";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import styled from "styled-components";

function Graph() {
  const resultStep = useAtomValue(resultStepAtom);
  const results = useAtomValue(resultsAtom)[resultStep - 1];

  const data = [
    {
      name: "기쁨",
      "ai 분석 결과": results.result.happy,
      "사용자 의견": results.feedback.happy,
    },
    {
      name: "당황",
      "ai 분석 결과": results.result.surprise,
      "사용자 의견": results.feedback.surprise,
    },
    {
      name: "분노",
      "ai 분석 결과": results.result.angry,
      "사용자 의견": results.feedback.angry,
    },
    {
      name: "불안",
      "ai 분석 결과": results.result.fear,
      "사용자 의견": results.feedback.fear,
    },
    {
      name: "슬픔",
      "ai 분석 결과": results.result.sad,
      "사용자 의견": results.feedback.sad,
    },
    {
      name: "무표정",
      "ai 분석 결과": results.result.neutral,
      "사용자 의견": results.feedback.neutral,
    },
  ];

  return (
    <Size>
      <TotalErrorComment>
        페이스 인식 기반 감정 분석기의 오차: {`${results.deviation}`}
      </TotalErrorComment>

      <BarChart width={900} height={280} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ai 분석 결과" fill="#8884d8" />
        <Bar dataKey="사용자 의견" fill="#82ca9d" />
      </BarChart>
    </Size>
  );
}

export default Graph;

const Size = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const TotalErrorComment = styled.p`
  color: #cecccc;
  font-weight: 600;
`;
