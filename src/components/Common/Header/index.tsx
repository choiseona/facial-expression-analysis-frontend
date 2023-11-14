import styled from "styled-components";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation().pathname;
  const handleClickLogo = () => {
    window.location.replace("/");
  };
  return (
    <HeaderBar $isHeader={location === "/"}>
      <Logo onClick={handleClickLogo}>AEFEA</Logo>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.header<{ $isHeader: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  color: #cecccc;
  background-color: ${(props) => (props.$isHeader ? "" : "#18191e")};
  z-index: 20;
`;

const Logo = styled.div`
  padding: 20px 30px;
  font-size: larger;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;
