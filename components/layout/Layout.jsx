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
    background-color: ${({theme}) => {theme.background}};
    color: ${({theme}) => {theme.textColor}}
`

const Main = styled.main`
    width: 100%;
    max-width: 1200px;
`