import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset},
html,body {
  width:100%;
  height:100%;
  background-color: #18191e;
}
#root {
  width: 100%;
  height: 100%;
}
button{
 all:unset;
}
`;

export default GlobalStyles;
