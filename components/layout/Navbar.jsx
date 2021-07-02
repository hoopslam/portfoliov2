import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { MdTagFaces } from "react-icons/md";
import Link from "next/link";

const Navbar = ({ themeHandler }) => {
	return (
		<NavbarContainer>
			<Logo />
			<ul>
				<li>
					<Link href='/'>
						<a><FaHome className="icon" size={25}/><span>Home</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/about'>
						<a>
							<MdTagFaces className="icon" size={25}/>
							<span>About</span>
						</a>
					</Link>
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
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 110px;
	left: 0;
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.textColor};
	transition: all 0.6s;

	.icon {
		position: absolute;
		left: 30px;
		top: 5px;
	}

	span {
		display: none;
		position: absolute;
		left: 70px;
		font-size: 1.5rem;
	}

	:hover {
		width: 220px;
	}

	:hover span {
		display: inline;
	}

	ul {
		width: 80%;
		text-align: center;
	}

	li {
		height: 40px;
		position: relative;
	}
`;

const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100px;
	width: 100%;
	background-color: ${({theme}) => theme.dark};
`;
