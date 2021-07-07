import styled from "styled-components";
import Link from "next/link";
import SocialLinks from "../ui/SocialLinks";

const Footer = () => {
	return (
		<FooterContainer>
			<LinksContainer>
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/about'>
					<a>About</a>
				</Link>
				<Link href='/portfolio'>
					<a>Portfolio</a>
				</Link>
				<Link href='/blog/'>
					<a>Blog</a>
				</Link>
			</LinksContainer>
			<SocialLinks />
			<p>Made with time, love, and copious amounts of coffee ☕</p>
			<p>&#169; David Cho 2021 All rights reserved</p>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	width: 100%;
	color: ${({theme}) => theme.lightText};
`;

const LinksContainer = styled.nav`
	display: flex;
	margin: 15px;

	a {
		margin: 0 15px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;