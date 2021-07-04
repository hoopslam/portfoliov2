import { useState } from "react";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import "./_app.css";
import GlobalStyle from "../styles/GlobalStyle";
import themes from "../styles/themes";

function MyApp({ Component, pageProps }) {
	const [selectedTheme, setSelectedTheme] = useState("blue");

	const themeHandler = (theme) => {
		setSelectedTheme(theme);
		console.log(theme)
	};

	return (
		<>
			<ThemeProvider theme={themes[selectedTheme]}>
				<GlobalStyle />
				<Layout>
					<Component {...pageProps} themeHandler={themeHandler}/>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
