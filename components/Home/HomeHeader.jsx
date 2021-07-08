import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { WHATIDO, COLORCODE } from "../../util/constants";
import { numToColor } from "../../util/utilfunctions";

const HomeHeader = ({ themeHandler }) => {
	const [indexNumber, setIndexNumber] = useState(0);

	const arrowRef = useRef();

	const toggler = (direction = "right") => {
		if(direction === "right"){
			indexNumber < 4 ? setIndexNumber(indexNumber + 1) : setIndexNumber(0);
		} else if(direction === "left") {
			indexNumber > 0 ? setIndexNumber(indexNumber - 1) : setIndexNumber(4);
		} else return null
	};

	const scrollDown = () => {
		console.log("clicked");
		arrowRef.current.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		themeHandler(numToColor(indexNumber));
	}, [indexNumber]);

	return (
		<Container id="home">
			<AvatarContainer>
				<Slider className='left' onClick={() => toggler("left")}>
					<Arrow className='left'>{"<"}</Arrow>
				</Slider>
				<Slider className='right' onClick={() => toggler("right")}>
					<Arrow className='right'>{">"}</Arrow>
				</Slider>
				<Avatar
					src={`/images/${indexNumber}.png`}
					alt='David Simpsonized Profile Image'
				/>
			</AvatarContainer>
			<TextContainer>
				<Greeting>
					<p>
						Howdy! I&apos;m <span>David</span>
					</p>
				</Greeting>
				<TextBlock>
					<p>
						I&apos;m a <span onClick={()=> toggler("right")}>{WHATIDO[indexNumber]}</span>
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
				<div className='arrowContainer'>
					<div className='arrow'></div>
				</div>
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

const AvatarContainer = styled.div`
	position: relative;
	width: 350px;
	height: 350px;
	margin: 15px;

	@media screen and (max-width: 990px) {
		width: 100%;
		max-width: 250px;
		height: 250px;
	}
`;

const Avatar = styled.img`
	border-radius: 50%;
	width: 350px;
	box-shadow: 0 0 5px #333;
	cursor: pointer;
	@media screen and (max-width: 990px) {
		width: 100%;
		max-width: 250px;
	}
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
		color: ${({ theme }) => (theme.primary === "#263238" ? "#00ff37" : theme.primary === "#d32f2f" ? "#1944d2" :theme.primary)};
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
		color: ${({ theme }) => (theme.primary === "#263238" ? "#00ff37" : theme.primary)};
		font-weight: bold;
		border-bottom: 2px solid
			${({ theme }) => (theme.primary === "#263238" ? "#000" : theme.primary)};
		&:hover {
			cursor: pointer;
		}
	}
`;

const ColorPicker = styled.div`
	position: fixed;
	top: 50%;
	right: 10px;
	transform: translate(0, -50%);
	display: flex;
	flex-direction: column;
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

	@media screen and (max-width: 990px) {
		flex-direction: row;
		top: 10px;
		right: 50%;
		transform: translate(50%, 0);

		button {
			margin: 10px;
		}
	}
`;

const DownArrow = styled.div`
	.arrowContainer {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		height: 100px;
		justify-content: center;
		align-items: center;
		animation: bounce 1.5s ease infinite;

		@keyframes bounce {
			0% {
				bottom: 20px;
			}
			50% {
				bottom: 10px;
			}
			100% {
				bottom: 20px;
			}
		}
	}

	@media screen and (max-width: 990px) {
		.arrowContainer {
			height: 50px;

			@keyframes bounce {
				0% {
					bottom: 5px;
				}
				50% {
					bottom: 0px;
				}
				100% {
					bottom: 5px;
				}
			}
		}
	}

	.arrow {
		height: 50px;
		width: 50px;
		border-style: solid;
		border-color: ${({ theme }) => theme.primary};
		border-width: 0px 4px 4px 0px;
		transform: rotate(45deg);
		transition: border-width 150ms ease-in-out;

		:hover {
			cursor: pointer;
			border-color: ${({ theme }) => (theme.light === "#4f5b62" ? theme.dark : theme.light)};
		}
	}
`;

const Arrow = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	top: 50%;
	transform: translate(0, -50%);
	z-index: 11;
	cursor: pointer;
	user-select: none;
	font-size: 2.5rem;
	border-radius: 50%;
	color: rgba(255, 255, 255, 0.89);

	&.left {
		left: 5px;
	}

	&.right {
		right: 5px;
	}
`;

const Slider = styled.div`
	position: absolute;
	width: 50%;
	height: 100%;
	z-index: 10;
	cursor: pointer;
	user-select: none;

	&.left {
		left: 0;
	}

	&.right {
		right: 0;
	}
`;
