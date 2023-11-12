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

interface Props {
  results: {
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
  };
}

function Graph({ results }: Props) {
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
  ];

  return (
    <>
      <TotalErrorComment>
        페이스 인식 기반 감정 분석기의 오차: {`${results.deviation}`}
      </TotalErrorComment>

      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ai 분석 결과" fill="#8884d8" />
        <Bar dataKey="사용자 의견" fill="#82ca9d" />
      </BarChart>
    </>
  );
}

export default Graph;

const TotalErrorComment = styled.p`
  color: #cecccc;
  font-weight: 600;
`;
