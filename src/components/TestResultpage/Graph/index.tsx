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
  result: {
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
  };
}

function Graph({ result }: Props) {
  const data = [
    {
      name: "기쁨",
      "ai 분석 결과": result.ai.happy,
      "사용자 의견": result.user.happy,
    },
    {
      name: "당황",
      "ai 분석 결과": result.ai.surprise,
      "사용자 의견": result.user.surprise,
    },
    {
      name: "분노",
      "ai 분석 결과": result.ai.angry,
      "사용자 의견": result.user.angry,
    },
    {
      name: "불안",
      "ai 분석 결과": result.ai.fear,
      "사용자 의견": result.user.fear,
    },
    {
      name: "슬픔",
      "ai 분석 결과": result.ai.sad,
      "사용자 의견": result.user.sad,
    },
  ];

  return (
    <>
      <TotalErrorComment>
        페이스 인식 기반 감정 분석기의 오차: {`${result.error}`}
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
