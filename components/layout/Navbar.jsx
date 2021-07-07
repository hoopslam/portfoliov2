import { useState } from "react";
import styled from "styled-components";
import { FaHome, FaBlog } from "react-icons/fa";
import { MdTagFaces } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
	const [active, setActive] = useState(false);

	const buttonHandler = () => {
		setActive(!active);
	};

	return (
		<>
			<NavbarContainer className={`${active ? "active" : ""}`}>
				<Logo>DC</Logo>
				<ul>
					<Link href='/'>
						<li onClick={buttonHandler}>
							<a>
								<div className='centeredIcon'>
									<FaHome className='icon' size={25} />
									<span>Home</span>
								</div>
							</a>
						</li>
					</Link>

					<Link href='/about'>
						<li onClick={buttonHandler}>
							<a>
								<div className='centeredIcon'>
									<MdTagFaces className='icon' size={25} />
									<span>About</span>
								</div>
							</a>
						</li>
					</Link>

					<Link href='/portfolio'>
						<li onClick={buttonHandler}>
							<a>
								<div className='centeredIcon'>
									<BsBriefcase className='icon' size={25} />
									<span>Portfolio</span>
								</div>
							</a>
						</li>
					</Link>

					<Link href='/blog/'>
						<li onClick={buttonHandler}>
							<a>
								<div className='centeredIcon'>
									<FaBlog className='icon' size={25} />
									<span>Blog</span>
								</div>
							</a>
						</li>
					</Link>

					<Link href='/contact'>
						<li onClick={buttonHandler}>
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
			<Hamburger onClick={buttonHandler}>
				<div className={`bar top ${active ? "active" : ""}`}></div>
				<div className={`bar middle ${active ? "active" : ""}`}></div>
				<div className={`bar bottom ${active ? "active" : ""}`}></div>
			</Hamburger>
		</>
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
	background-color: ${({ theme }) => theme.sidebar};
	color: white;
	transition: all 0.5s ease;
	z-index: 10;

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

	@media screen and (max-width: 768px) {
		width: 100%;
		max-width: 220px;
		left: -100%;

		span {
			display: inline;
			visibility: visible;
			opacity: 1;
		}

		&.active {
			left: 0;
		}
	}
`;

const Logo = styled.div`
	font-family: "Yellowtail", cursive;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.5rem;
	font-weight: bold;
	position: absolute;
	top: 0;
	left: 0;
	height: 100px;
	width: 100%;
	background-color: ${({ theme }) => theme.dark};
`;

const Hamburger = styled.button`
	display: none;
	position: fixed;
	top: 10px;
	right: 10px;
	width: 35px;
	height: 35px;
	cursor: pointer;
	appearance: none;
	background: none;
	border: none;
	outline: none;
	z-index: 10;

	.bar {
		content: "";
		display: block;
		width: 100%;
		height: 3px;
		background-color: rgb(160, 160, 160);
		margin: 5px 0px;
		transition: 0.6s;
	}

	.bar.top.active {
		transform: rotate(45deg) translate(6px, 5px);
	}

	.bar.middle.active {
		transform: rotate(135deg);
	}

	.bar.bottom.active {
		transform: rotate(135deg) translate(-6px, 6px);
	}

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
