import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { MdTagFaces } from "react-icons/md";

const Navbar = ({themeHandler}) => {
	return (
		<NavbarContainer>
			<ul>
				<li>
					<FaHome />
					<span>Home</span>
				</li>
				<li>
					<MdTagFaces />
					<span>About</span>
				</li>
			</ul>
		</NavbarContainer>
	);
};

export default Navbar;

const NavbarContainer = styled.nav`
	position: fixed;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 110px;
	left: 0;
	background-color: ${({theme}) => theme.primary };
	color: ${({theme}) => theme.textColor};
	transition: all 0.6s;

	span {
		display: none;
	}

	:hover {
		width: 220px;
	}

	:hover span {
		display: inline;
	}
`;