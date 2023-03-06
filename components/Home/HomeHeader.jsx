import styled from 'styled-components';
import { WHATIDO, PROFILE_IMGS } from '../../util/constants';
import { COLORS } from '../../util/constants';

const HomeHeader = ({ selectedTheme, themeHandler }) => {
    const toggler = (direction = 'right') => {
        console.log(`triggered`);
        if (!direction) return null;
        if (direction === 'right') {
            selectedTheme < 4
                ? themeHandler(selectedTheme + 1)
                : themeHandler(0);
        }
        if (direction === 'left') {
            selectedTheme > 0
                ? themeHandler(selectedTheme - 1)
                : themeHandler(4);
        }
    };

    return (
        <Container id='home'>
            <AvatarContainer>
                <Slider
                    className='left'
                    onClick={() => toggler('left')}
                ></Slider>
                <Slider
                    className='right'
                    onClick={() => toggler('right')}
                ></Slider>
                {PROFILE_IMGS.map((profile_image, i) => (
                    <ImageContainer
                        key={i}
                        active={i === selectedTheme}
                    >
                        <Arrow className='left'>{'<'}</Arrow>
                        <Arrow className='right'>{'>'}</Arrow>
                        <img
                            src={profile_image}
                            alt='David Simpsonized Profile Image'
                            width='100%'
                            height='100%'
                        />
                    </ImageContainer>
                ))}
                <ColorPicker>
                    {COLORS.map((color, i) => (
                        <button
                            key={color.id}
                            onClick={() => themeHandler(color.id)}
                            style={{
                                backgroundColor: `${color.hex}`,
                                transform: `${
                                    selectedTheme === i ? `scale(1.4)` : ''
                                }`,
                            }}
                            aria-label='color-picker-button'
                        ></button>
                    ))}
                </ColorPicker>
            </AvatarContainer>
            <TextContainer>
                <Greeting>
                    <p>Howdy!</p>

                    <p>I&apos;m</p>

                    <p>
                        <span>David</span>
                    </p>
                </Greeting>
                <TextBlock>
                    <p>
                        I&apos;m a{' '}
                        <span onClick={() => toggler('right')}>
                            {WHATIDO[selectedTheme]}
                        </span>
                    </p>
                </TextBlock>
            </TextContainer>
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
    width: 100%;
    height: 350px;
    margin: 15px;

    .picker {
        transition: transform 0.5s ease;
        :hover {
            transform: scale(1.05);
        }
    }

    @media screen and (max-width: 990px) {
        width: 100%;
        max-width: 250px;
        height: 250px;
    }
`;

const ImageContainer = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 350px;
    height: 350px;
    box-shadow: 0 0 4px #333;
    cursor: pointer;
    aspect-ratio: 1 / 1;
    transition: all 0.5s ease-out;
    backface-visibility: hidden;
    transform: ${({ active }) => (active ? `rotateY(0)` : `rotateY(180deg)`)};

    img {
        border-radius: 50%;
    }

    @media screen and (max-width: 990px) {
        width: 100%;
        width: 250px;
        height: 250px;
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
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        color: ${({ theme }) =>
            theme.primary === '#263238'
                ? '#00ff37'
                : theme.primary === '#d32f2f'
                ? '#1944d2'
                : theme.primary};
        position: relative;
        font-size: 3rem;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }
    p {
        margin: 3px;
    }
`;

const TextBlock = styled.div`
    margin: 15px;
    color: ${({ theme }) => theme.textColor};
    font-size: 1.5rem;
    position: relative;

    span {
        color: ${({ theme }) =>
            theme.primary === '#263238' ? '#00ff37' : theme.primary};
        font-weight: bold;
        border-bottom: 2px solid
            ${({ theme }) =>
                theme.primary === '#263238' ? '#000' : theme.primary};
        &:hover {
            cursor: pointer;
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

const ColorPicker = styled.div`
    position: absolute;
    bottom: -48px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    button {
        cursor: pointer;
        margin: 4px;
        width: 16px;
        height: 16px;
        border: none;
        box-shadow: 1px 1px 3px #000;
        border-radius: 50%;
        transition: all 0.2s;

        :hover {
            transform: scale(1.4);
        }
    }
`;
