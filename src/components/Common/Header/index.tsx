import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate("/");
  };
  return (
    <HeaderBar>
      <Logo onClick={handleClickLogo}>AEFEA</Logo>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  color: #cecccc;
  background-color: #18191e;
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
