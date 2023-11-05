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
  resultStep: number;
}

const data = [
  {
    name: "기쁨",
    "ai 분석 결과": 0.5,
    "사용자 의견": 0.2,
  },
  {
    name: "당황",
    "ai 분석 결과": 0.5,
    "사용자 의견": 0.2,
  },
  {
    name: "분노",
    "ai 분석 결과": 0.5,
    "사용자 의견": 0.2,
  },
  {
    name: "불안",
    "ai 분석 결과": 0.5,
    "사용자 의견": 0.2,
  },
  {
    name: "상처",
    "ai 분석 결과": 0.5,
    "사용자 의견": 0.2,
  },
  {
    name: "슬픔",
    "ai 분석 결과": 0.5,
    "사용자 의견": 0.2,
  },
];

function Graph({ resultStep }: Props) {
  return (
    <>
      <TotalErrorComment>
        페이스 인식 기반 감정 분석기의 오차: {`${44}`}
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
