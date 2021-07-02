import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children, themeHandler}) => {
    return (
        <LayoutContainer>
			<Navbar themeHandler={themeHandler}/>
            <Main>{children}</Main>
            <Footer />
        </LayoutContainer>
    )
}

export default Layout

const LayoutContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => {theme.background}};
    color: ${({theme}) => {theme.textColor}};
`

const Main = styled.main`
    width: 100%;
    flex-grow: 1;
`