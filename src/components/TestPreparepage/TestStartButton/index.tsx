import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function TestStartButton() {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/test/progress");
    axios
      .get("/api/test/start")
      .then((res) => {
        console.log(res.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return <Button onClick={handleClickButton}>시작하기</Button>;
}

export default TestStartButton;

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
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
