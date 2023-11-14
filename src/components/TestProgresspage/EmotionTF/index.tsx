import styled from "styled-components";
import { AnimationControls } from "framer-motion";
import { useAtom, useSetAtom } from "jotai";
import { detailEmotionAtom, emotionTFAtom } from "@/global/store";
import { initialEmotion, initialEmotionDropDown } from "@/global/data";
import { useEffect } from "react";
import { DropdownOpenType } from "@/global/type";
interface props {
  emotionDetailControl: AnimationControls;
  setDropdownOpen: React.Dispatch<React.SetStateAction<DropdownOpenType>>;
  emotionDropdownControls: {
    happy: AnimationControls;
    surprise: AnimationControls;
    angry: AnimationControls;
    fear: AnimationControls;
    sad: AnimationControls;
  };
}

function EmotionTF({
  emotionDetailControl,
  setDropdownOpen,
  emotionDropdownControls,
}: props) {
  const [emotionTF, setEmotionTF] = useAtom(emotionTFAtom);
  const setDetailEmotion = useSetAtom(detailEmotionAtom);

  const handleTochangeRadio = () => {
    setEmotionTF((prev) => !prev);
    emotionDetailControl.start(emotionTF ? "closed" : "open");
  };

  useEffect(() => {
    setDropdownOpen(initialEmotionDropDown);
    setDetailEmotion(initialEmotion);
    Object.keys(emotionDropdownControls).forEach((key) => {
      emotionDropdownControls[
        key as keyof typeof emotionDropdownControls
      ].start("closed");
    });
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
  transition: color 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    color: #02020f;
    background-color: #dedede; /* 선택된 경우의 배경색을 원하는 색으로 변경하세요. */
    transition: color 0.2s ease;
  }
`;
