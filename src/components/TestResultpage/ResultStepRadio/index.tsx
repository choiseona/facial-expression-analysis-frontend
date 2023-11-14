import { resultStepAtom } from "@/global/store";
import { useAtom } from "jotai";
import styled from "styled-components";

function ResultStepRadio() {
  const [resultStep, setResultStep] = useAtom(resultStepAtom);

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
  width: 100%;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const RadioLabel = styled.label`
  width: 33%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dedede;
  font-weight: 600;
  border: 1px solid white;
  border-radius: 10px 10px 0 0;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    color: #02020f;
    background-color: #dedede;
    transition: all 0.2s ease;
  }
`;

export default ResultStepRadio;
