import styled from "styled-components";

interface props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  content: string;
  isMarginBottom?: boolean;
}

function NextButton({ content, onClick, isMarginBottom }: props) {
  return (
    <Button $isMarginBottom={!!isMarginBottom} onClick={onClick}>
      {content}
    </Button>
  );
}

export default NextButton;

const Button = styled.button<{ $isMarginBottom: boolean }>`
  z-index: 20;
  width: 150px;
  font-size: 1.2rem;
  font-weight: 550;
  padding: 10px 0;
  margin-bottom: ${(props) => (props.$isMarginBottom ? "50px" : "0")};
  border-radius: 10px;
  color: #cecccc;
  border: none;
  background-color: rgba(255, 255, 255, 0.25);
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color 0.5s ease;
  }
`;
