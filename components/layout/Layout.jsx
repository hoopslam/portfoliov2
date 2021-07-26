import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, themeHandler }) => {
	return (
		<LayoutContainer>
			<Head>
				<title>David Cho Web Developer</title>
				<meta
					name='description'
					content="David Cho's home page.  Web Developer, blogger, cat dad"
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar themeHandler={themeHandler}/>
			<Main>{children}</Main>
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;

const LayoutContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.textColor};
`;

const Main = styled.main`
	width: 100%;
	max-width: 768px;
	flex-grow: 1;
`;
