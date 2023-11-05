import styled from "styled-components";

interface Props {
  resultStep: number;
  setResultStep: React.Dispatch<React.SetStateAction<number>>;
}
function ResultStepRadio({ resultStep, setResultStep }: Props) {
  const handleTochangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResultStep(Number(event.target.value));
  };
  return (
    <Center>
      <RadioGroup>
        <Input
          type="radio"
          name="resultStep"
          id="resultStep1"
          value="1"
          checked={resultStep === 1 ? true : false}
          onChange={handleTochangeRadio}
        />
        <RadioLabel htmlFor="resultStep1">Sample1</RadioLabel>
        <Input
          type="radio"
          name="resultStep"
          id="resultStep2"
          value="2"
          checked={resultStep === 2 ? true : false}
          onChange={handleTochangeRadio}
        />
        <RadioLabel htmlFor="resultStep2">Sample2</RadioLabel>
        <Input
          type="radio"
          name="resultStep"
          id="resultStep3"
          value="3"
          checked={resultStep === 3 ? true : false}
          onChange={handleTochangeRadio}
        />
        <RadioLabel htmlFor="resultStep3">Sample3</RadioLabel>
      </RadioGroup>
    </Center>
  );
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #dedede;
  gap: 20px;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const RadioLabel = styled.label`
  width: 300px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dedede;
  font-weight: 600;
  border: 1px solid white;
  border-radius: 10px 10px 0 0;

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

export default ResultStepRadio;
