import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset},
html,body {
  width:100%;
  height:100%;
}
#root {
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyles;
