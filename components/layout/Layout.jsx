import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children, themeHandler, selectedTheme }) => {
    return (
        <LayoutContainer>
            <Head>
                <title>David Cho Software Engineer</title>
                <meta
                    name='description'
                    content="David Cho's home page.  Software Engineer, blogger, cat dad"
                />
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
            </Head>
            <Navbar
                themeHandler={themeHandler}
                selectedTheme={selectedTheme}
            />
            <Main>{children}</Main>
            <Footer />
        </LayoutContainer>
    );
};

export default Layout;

const LayoutContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.textColor};
`;

const Main = styled.main``;
