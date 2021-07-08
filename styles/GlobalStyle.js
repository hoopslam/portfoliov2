import {createGlobalStyle} from "styled-components";

//Global Styles Reset
const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

a {
	text-decoration: none;
  color: inherit;
}

ul {
  list-style-type: none;
}

body{
  min-height:100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: ${({theme}) => theme.background};
  scroll-behavior: smooth;
}
`;

export default GlobalStyle