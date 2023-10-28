import { useState } from "react";
import styled from "styled-components";

function EmotionTF() {
  const [emotion, setEmotion] = useState(true);

  const handleTochangeRadio = () => {
    setEmotion(!emotion);
  };

  return (
    <Center>
      <h1>어떤 감정을 느꼈나요?</h1>
      <RadioGroup>
        <Input
          type="radio"
          name="emotion"
          id="emotionTrue"
          value="emotionTrue"
          checked={emotion === true ? true : false}
          onChange={handleTochangeRadio}
        />
        <RadioLabel htmlFor="emotionTrue">감정 있음</RadioLabel>
        <Input
          type="radio"
          name="emotion"
          id="emotionFalse"
          value="emotionFalse"
          checked={emotion === false ? true : false}
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
  gap: 10px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioLabel = styled.label`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dedede;
  font-weight: 600;
  border: 1px solid white;
  border-radius: 10px;
`;

const Input = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    color: #02020f;
    background-color: #dedede; /* 선택된 경우의 배경색을 원하는 색으로 변경하세요. */
  }
`;
