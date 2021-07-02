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
				<Link href='/'>
					<li>
						<a>
							<div className='centeredIcon'>
								<FaHome className='icon' size={25} />
								<span>Home</span>
							</div>
						</a>
					</li>
				</Link>

				<Link href='/about'>
					<li>
						<a>
							<div className='centeredIcon'>
								<MdTagFaces className='icon' size={25} />
								<span>About</span>
							</div>
						</a>
					</li>
				</Link>

				<Link href='/portfolio'>
					<li>
						<a>
							<div className='centeredIcon'>
								<BsBriefcase className='icon' size={25} />
								<span>Portfolio</span>
							</div>
						</a>
					</li>
				</Link>

				<Link href='/blog/'>
					<li>
						<a>
							<div className='centeredIcon'>
								<FaBlog className='icon' size={25} />
								<span>Blog</span>
							</div>
						</a>
					</li>
				</Link>

				<Link href='/contact'>
					<li>
						<a>
							<div className='centeredIcon'>
								<BiMessageDetail className='icon' size={25} />
								<span>Contact</span>
							</div>
						</a>
					</li>
				</Link>
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
	transition: all 0.5s;

	.icon {
		position: absolute;
		left: 30px;
	}

	span {
		display: none;
		visibility: hidden;
		opacity: 0;
		position: absolute;
		left: 70px;
		font-size: 1.1rem;
	}

	:hover {
		width: 220px;
	}

	:hover span {
		display: inline;
		visibility: visible;
		opacity: 1;
	}

	ul {
		width: 80%;
		text-align: center;
	}

	li {
		height: 50px;
		border-radius: 12px;
		margin-top: 10px;
	}

	.centeredIcon {
		display: flex;
		align-items: center;
		position: relative;
		top: 50%;
	}

	li:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.light};
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
