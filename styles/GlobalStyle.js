import {createGlobalStyle} from "styled-components";

//Global Styles Reset
const GlobalStyle = createGlobalStyle`
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
  max-width: 1200px;
  margin: 0 auto;
}
`;

export default GlobalStyle