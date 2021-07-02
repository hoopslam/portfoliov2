import styled from "styled-components";
import { FaHome, FaBlog } from "react-icons/fa";
import { MdTagFaces } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import Link from "next/link";

const Navbar = ({ themeHandler }) => {
	return (
		<NavbarContainer>
			<Logo>DC</Logo>
			<ul>
				<li>
					<Link href='/'>
						<a>
							<FaHome className='icon' size={25} />
							<span>Home</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/about'>
						<a>
							<MdTagFaces className='icon' size={25} />
							<span>About</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/portfolio'>
						<a>
							<BsBriefcase className='icon' size={25} />
							<span>Portfolio</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/blog/'>
						<a>
							<FaBlog className='icon' size={25} />
							<span>Blog</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/contact'>
						<a>
							<BiMessageDetail className='icon' size={25} />
							<span>Contact</span>
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
	color: white;
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
		height: 50px;
		position: relative;
	}
`;

const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100px;
	width: 100%;
	background-color: ${({ theme }) => theme.dark};
`;
