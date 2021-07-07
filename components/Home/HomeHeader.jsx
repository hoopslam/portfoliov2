import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { WHATIDO, COLORCODE } from "../../util/constants";
import { numToColor } from "../../util/utilfunctions";

const HomeHeader = ({ themeHandler }) => {
	const [indexNumber, setIndexNumber] = useState(0);

	const arrowRef = useRef();

	const toggler = () => {
		indexNumber < 5 ? setIndexNumber(indexNumber + 1) : setIndexNumber(0);
	};

	const scrollDown = () => {
		arrowRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		themeHandler(numToColor(indexNumber));
	}, [indexNumber]);

	return (
		<Container>
			<Avatar
				onClick={toggler}
				src='/images/davidsimpson.svg'
				alt='David Simpsonized Profile Image'
			/>
			<TextContainer>
				<Greeting>
					<p>
						Howdy! I'm <span>David</span>
					</p>
				</Greeting>
				<TextBlock>
					<p>
						I'm a{indexNumber === 5 ? "n" : null}{" "}
						<span onClick={toggler}>{WHATIDO[indexNumber]}</span>
					</p>
				</TextBlock>
				<ColorPicker>
					{COLORCODE.map((code, i) => (
						<button
							key={i}
							onClick={() => setIndexNumber(i)}
							style={{ backgroundColor: `${code}` }}></button>
					))}
				</ColorPicker>
			</TextContainer>
			<DownArrow onClick={scrollDown} ref={arrowRef}>
				<div className="arrowContainer"><div className="arrow"></div></div>
			</DownArrow>
		</Container>
	);
};

export default HomeHeader;

const Container = styled.header`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	@media screen and (max-width: 990px) {
		flex-direction: column;
	}
`;

const Avatar = styled.img`
	border-radius: 50%;
	margin: 15px;
	box-shadow: 0 0 5px #333;
	cursor: pointer;
`;

const TextContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Greeting = styled.div`
	color: ${({ theme }) => theme.textColor};
	font-size: 1.5rem;
	margin: 20px;
	position: relative;

	span {
		color: ${({ theme }) => (theme.primary === "#263238" ? "#000" : theme.primary)};
		position: relative;
		font-size: 3rem;
		font-weight: bold;
		font-family: "Poppins", sans-serif;
	}
`;

const TextBlock = styled.div`
	margin: 15px;
	color: ${({ theme }) => theme.textColor};
	font-size: 1.2rem;
	position: relative;

	span {
		color: ${({ theme }) => (theme.primary === "#263238" ? "#000" : theme.primary)};
		font-weight: bold;
		border-bottom: 2px solid
			${({ theme }) => (theme.primary === "#263238" ? "#000" : theme.primary)};
		&:hover {
			cursor: pointer;
		}
	}
`;

const ColorPicker = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	button {
		cursor: pointer;
		margin: 5px;
		width: 20px;
		height: 20px;
		border: none;
		box-shadow: 1px 1px 5px #333;
		border-radius: 50%;
	}
`;

const DownArrow = styled.div`
	.arrowContainer {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translate( -50%, -50%);
		display: flex;
		height: 100px;
		justify-content: center;
		align-items: center;
	}

	.arrow {
		height: 50px;
		width: 50px;
		border-style: solid;
		border-color: ${({theme}) => theme.primary};
		border-width: 0px 4px 4px 0px;
		transform: rotate(45deg);
		transition: border-width 150ms ease-in-out;

		:hover {
			cursor: pointer;
			border-color: ${({theme}) => theme.light};
		}
	}
`;
