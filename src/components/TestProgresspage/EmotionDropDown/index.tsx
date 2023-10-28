import { useState, Fragment } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  setDetailEmotion: React.Dispatch<
    React.SetStateAction<{
      happy: number;
      surprise: number;
      angry: number;
      fear: number;
      disgust: number;
      sad: number;
    }>
  >;
}

function EmotionDropDown({ name, setDetailEmotion }: Props) {
  const [detailChoice, setDetailChoice] = useState("");
  const radioValue = [
    { key: "매우 조금", score: "1" },
    { key: "조금", score: "2" },
    { key: "보통", score: "3" },
    { key: "많이", score: "4" },
    { key: "매우 많이", score: "5" },
  ];

  const handleToChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetailChoice(event.target.value);
    setDetailEmotion((prev) => ({
      ...prev,
      name: Number(event.target.value),
    }));
  };

  const handleToClickSameRadio = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.value === detailChoice) {
      setDetailChoice("");
      setDetailEmotion((prev) => ({ ...prev, name: 0 }));
    }
  };

  return (
    <>
      {radioValue.map((item, index) => (
        <Fragment key={index}>
          <RadioInput
            type="radio"
            name={name}
            id={`${name} ${item.score}`}
            value={item.score}
            checked={item.score === detailChoice}
            onClick={handleToClickSameRadio}
            onChange={handleToChangeRadio}
          />
          <RadioLabel htmlFor={`${name} ${item.score}`}>{item.key}</RadioLabel>
        </Fragment>
      ))}
    </>
  );
}

export default EmotionDropDown;

const RadioLabel = styled.label`
  color: #eadcdc;
  cursor: pointer;
  font-weight: 600;
`;

const RadioInput = styled.input`
  display: none;
  &:checked + ${RadioLabel} {
    color: #0092af;
  }
`;
