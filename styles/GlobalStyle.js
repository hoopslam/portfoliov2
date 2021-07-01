import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

a {
	text-decoration: none;
}

body{
  min-height:100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
`;

export default GlobalStyle