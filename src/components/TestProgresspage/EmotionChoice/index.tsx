// EmotionChoice.tsx
import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import DropDown from "@/assets/icon/drop_down-down.svg";
import { emotion, initialEmotion } from "@/global/data";
import EmotionDropDown from "../EmotionDropDown";
import DropDownMotion from "@/components/Common/DropDownMotion";
import { DropdownControlsType, DropdownOpenType } from "@/global/type";
import { useAtomValue, useSetAtom } from "jotai";
import { detailEmotionAtom, emotionTFAtom } from "@/global/store";

interface Props {
  dropdownOpen: DropdownOpenType;
  setDropdownOpen: React.Dispatch<React.SetStateAction<DropdownOpenType>>;
  emotionDropdownControls: DropdownControlsType;
}

function EmotionChoice({
  dropdownOpen,
  emotionDropdownControls,
  setDropdownOpen,
}: Props) {
  const setDetailEmotion = useSetAtom(detailEmotionAtom);
  const emotionTF = useAtomValue(emotionTFAtom);
  const [detailChoice, setDetailChoice] = useState(initialEmotion);

  useEffect(() => {
    setDetailChoice(initialEmotion);
  }, [emotionTF]);

  const handleDropdown = async (name: keyof DropdownOpenType) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }));
    emotionDropdownControls[name].start(dropdownOpen[name] ? "closed" : "open");
  };

  const handleToChangeRadio = (name: string, value: string) => {
    setDetailChoice((prev) => ({ ...prev, [name]: Number(value) }));
    setDetailEmotion((prev) => ({ ...prev, [name]: Number(value) }));
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
            <FlexBetween>
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
            </FlexBetween>
            <DropDownMotion
              controls={
                emotionDropdownControls[item.english as keyof DropdownOpenType]
              }
              initial="closed"
            >
              <DetailEmotion>
                <EmotionDropDown
                  name={item.english}
                  detailChoice={
                    detailChoice[item.english as keyof DropdownOpenType]
                  }
                  handleToChangeRadio={handleToChangeRadio}
                />
              </DetailEmotion>
            </DropDownMotion>
          </Emotion>

          <Underline />
        </Fragment>
      ))}
    </DetailEmotionBox>
  );
}

export default EmotionChoice;

const DetailEmotionBox = styled.div`
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FlexBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Emotion = styled.button``;
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
  margin: 0;
`;
