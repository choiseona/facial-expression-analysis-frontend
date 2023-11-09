// EmotionChoice.tsx
import { useState, Fragment } from "react";
import styled from "styled-components";
import DropDown from "@/assets/icon/drop_down-down.svg";
import { emotion } from "@/global/data";
import EmotionDropDown from "../EmotionDropDown";

interface Props {
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

interface DropdownOpenType {
  happy: boolean;
  surprise: boolean;
  angry: boolean;
  fear: boolean;
  sad: boolean;
}

function EmotionChoice({ setDetailEmotion }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState<DropdownOpenType>({
    happy: false,
    surprise: false,
    angry: false,
    fear: false,
    sad: false,
  });
  const [detailChoice, setDetailChoice] = useState<{
    [key: string]: string;
  }>({});

  const handleDropdown = (name: keyof DropdownOpenType) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name as keyof DropdownOpenType],
    }));
  };

  const handleToChangeRadio = (name: string, value: string) => {
    setDetailChoice((prev) => ({ ...prev, [name]: value }));
    const emotionName = name as keyof Props["setDetailEmotion"];
    setDetailEmotion((prev) => ({
      ...prev,
      [emotionName]: Number(value),
    }));
  };

  return (
    <DetailEmotionBox>
      {emotion.map((item, index) => (
        <Fragment key={index}>
          <Emotion
            onClick={() =>
              handleDropdown(item.english as keyof DropdownOpenType)
            }
          >
            <EmotionName>{item.korean}</EmotionName>
            <DropDownImage
              src={DropDown}
              alt="드롭다운"
              className={
                dropdownOpen[item.english as keyof DropdownOpenType]
                  ? "open"
                  : ""
              }
            />
          </Emotion>

          {dropdownOpen[item.english as keyof DropdownOpenType] && (
            <DetailEmotion>
              <EmotionDropDown
                name={item.english}
                detailChoice={detailChoice[item.english]}
                handleToChangeRadio={handleToChangeRadio}
              />
            </DetailEmotion>
          )}
          <Underline />
        </Fragment>
      ))}
    </DetailEmotionBox>
  );
}

export default EmotionChoice;

const DetailEmotionBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Emotion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
const EmotionName = styled.div`
  color: #dedede;
  font-weight: 600;
`;
const DropDownImage = styled.img`
  width: 20px;
  &.open {
    transform: rotate(180deg);
  }
`;

const DetailEmotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Underline = styled.hr`
  width: 100%;
  border: 1px solid #dedede;
`;
