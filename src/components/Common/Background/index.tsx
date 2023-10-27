import styled from "styled-components";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
function Background({ children }: props) {
  return <BackgroundColor>{children}</BackgroundColor>;
}

export default Background;

const BackgroundColor = styled.div`
  background-color: #02020f;
  width: 100%;
  height: 100%;
`;
