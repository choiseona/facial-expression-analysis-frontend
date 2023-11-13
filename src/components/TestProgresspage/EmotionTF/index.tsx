import styled from "styled-components";
import { useEffect } from "react";
import { initialEmotion } from "@/global/data";

interface props {
  emotionTF: boolean;
  setEmotionTF: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailEmotion: React.Dispatch<
    React.SetStateAction<{
      happy: number;
      surprise: number;
      angry: number;
      fear: number;
      sad: number;
    }>
  >;
}

function EmotionTF({ setEmotionTF, emotionTF, setDetailEmotion }: props) {
  const handleTochangeRadio = () => {
    setEmotionTF(!emotionTF);
  };

  useEffect(() => {
    if (!emotionTF) {
      setDetailEmotion(initialEmotion);
    }
  }, [emotionTF]);

  return (
    <Center>
      <Question>어떤 감정을 느꼈나요?</Question>
      <RadioGroup>
        <Input
          type="radio"
          name="emotion"
          id="emotionTrue"
          value="emotionTrue"
          checked={emotionTF === true ? true : false}
          onChange={handleTochangeRadio}
        />
        <RadioLabel htmlFor="emotionTrue">감정 있음</RadioLabel>
        <Input
          type="radio"
          name="emotion"
          id="emotionFalse"
          value="emotionFalse"
          checked={emotionTF === false ? true : false}
          onChange={handleTochangeRadio}
        />
        <RadioLabel htmlFor="emotionFalse">감정 없음</RadioLabel>
      </RadioGroup>
    </Center>
  );
}

export default EmotionTF;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #dedede;
  gap: 20px;
`;

const Question = styled.h1`
  font-weight: 600;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const RadioLabel = styled.label`
  width: 150px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dedede;
  font-weight: 600;
  border: 1px solid white;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    color: #02020f;
    background-color: #dedede; /* 선택된 경우의 배경색을 원하는 색으로 변경하세요. */
  }
`;
