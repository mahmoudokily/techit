import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

#root {
  min-height: 100vh;
  scrollbar-color: #cf4f83 transparent ;
}
html {
  margin: 0;
  padding: 0;
  font-family: "sans-serif";
  }

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}


img {
  display: block;
  max-width: 100%;
}

`
export default GlobalStyle
