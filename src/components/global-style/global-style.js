import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/montserrat.woff2") format("woff2"),
         url("/fonts/montserrat.woff") format("woff"),
         local("Montserrat-Regular");
  }

  @font-face {
    font-family: "bitter";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/bitter.woff2") format("woff2"),
         url("/fonts/bitter.woff") format"woff"),
         local("Bitter-Regular");
  }

  body {
    font-family: "montserrat";
  }
`;

export default GlobalStyle;
