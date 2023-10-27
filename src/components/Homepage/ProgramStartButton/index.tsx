import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ProgramStartButton() {
  const navigate = useNavigate();
  const handleClickStartButton = () => {
    navigate("/test/prepare");
  };
  return <Button onClick={handleClickStartButton}>시작하기</Button>;
}

export default ProgramStartButton;

const Button = styled.button`
  z-index: 20;
  width: 150px;
  font-size: 1.2rem;
  font-weight: 550;
  padding: 6px 0;
  border-radius: 10px;
  color: #cecccc;
  border: none;
  background-color: rgba(255, 255, 255, 0.25);

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
