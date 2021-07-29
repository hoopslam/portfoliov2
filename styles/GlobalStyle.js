import styled, {createGlobalStyle} from "styled-components";

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

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => (theme.primary === "#00ff37" ? "#000" : "#fff")};
  background-color: ${({ theme }) => theme.primary};
  border: none;
  padding: 8px 12px;
  border-radius: 12px;
  transition: all 0.25s ease;

  .icon {
    margin: 0 5px;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;