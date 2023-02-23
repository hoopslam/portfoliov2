import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Toolkit from '../ui/Toolkit';

const PROFILE_PICS = [
    {
        src: `/images/pro0.jpg`,
        text: `Exploring Angkor Thom`,
    },
    {
        src: `/images/pro1.jpg`,
        text: `With Wife, Becky`,
    },
    {
        src: `/images/pro2.jpg`,
        text: `Our cat, Miru`,
    },
    {
        src: `/images/pro3.jpg`,
        text: `#Clippers Nation`,
    },
];

const About = () => {
    const [activeImage, setActiveImage] = useState(0);

    const changeImage = (imageNum) => {
        if (imageNum > PROFILE_PICS.length - 1) {
            setActiveImage(0);
            return;
        }
        setActiveImage(imageNum);
    };

    return (
        <AboutContainer id='about'>
            <div className='intro'>
                <h1>About Me</h1>
            </div>
            <div className='description'>
                <div className='image-container'>
                    {PROFILE_PICS.map((pic, i) => (
                        <ImageContainer
                            key={pic.src}
                            order={i + 1}
                            activeImage={i === activeImage}
                            onClick={() => changeImage(i + 1)}
                        >
                            <div className='image-group'>
                                <div className={`profile-image`}>
                                    <Image
                                        src={pic.src}
                                        height={250}
                                        width={320}
                                        alt={pic.text}
                                    />
                                </div>
                                <p className='image-text'>{pic.text}</p>
                            </div>
                        </ImageContainer>
                    ))}
                </div>
                <p> Thanks for stopping by!</p>
                <p>
                    I&apos;m David, a Korean American Software Developer based
                    out of Seoul, South Korea. Originally from California, I
                    moved to Korea shortly after graduating from UC Davis in
                    2010. I love traveling, watching NBA highlights, being a cat
                    dad, and writing code.
                </p>
                <p>
                    You&apos;ll usually find me in the front end, developing
                    mostly with React, Typescript, and a styling library of some
                    sort like Tailwind, Styled-Components, Material-UI, or
                    Bootstrap. I also enjoy working on full stack projects and
                    have recently even gotten into a bit of mobile development.
                </p>
            </div>
            <ToolkitContainer>
                <h2>Some of the things I use</h2>
                <Toolkit />
            </ToolkitContainer>
        </AboutContainer>
    );
};

export default About;

const ImageContainer = styled.div`
    position: absolute;
    padding: 10px;
    box-shadow: 2px 2px 10px #000;
    background-color: white;
    transform: ${({ order }) =>
        order === 1
            ? `rotate(6deg)`
            : order === 2
            ? `rotate(4deg)`
            : order === 3
            ? `rotate(2deg)`
            : `rotate(0deg)`};
    z-index: ${({ activeImage }) => (activeImage ? `10` : `0`)};

    p {
        font-family: 'Indie Flower', cursive;
        font-weight: 600;
        text-align: center;
        color: #000;
    }
    @media screen and (max-width: 768px) {
        float: none;
        margin: 0;

        p {
            margin: 0;
        }
    }
`;

const ToolkitContainer = styled.div`
    width: 100%;
    margin: 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    .image-container {
        width: 320px;
        height: 300px;
        margin: 0 35px 25px 20px;
        cursor: pointer;
        float: left;
        position: relative;

        @media screen and (max-width: 768px) {
            width: 250px;
            height: 230px;
        }
    }

    P {
        font-size: 1.1rem;
    }

    .intro {
        margin: 100px 0 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .description {
        align-items: center;
        width: 100%;
        text-align: start;
        padding: 20px;

        .greeting {
            span {
                font-size: 1.75rem;
                color: ${({ theme }) => theme.primary};
            }
        }

        p {
            margin: 10px 25px;
        }

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;
