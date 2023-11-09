// EmotionDropDown.tsx
import { Fragment } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  detailChoice: string;
  handleToChangeRadio: (name: string, value: string) => void;
}

function EmotionDropDown({ name, detailChoice, handleToChangeRadio }: Props) {
  const radioValue = [
    { key: "매우 조금", score: "1" },
    { key: "조금", score: "2" },
    { key: "보통", score: "3" },
    { key: "많이", score: "4" },
    { key: "매우 많이", score: "5" },
  ];

  const handleToClickSameRadio = (value: string) => {
    if (value === detailChoice) {
      handleToChangeRadio(name, "0");
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
            onClick={() => handleToClickSameRadio(item.score)}
            onChange={(e) => handleToChangeRadio(name, e.target.value)}
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
