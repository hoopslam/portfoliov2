import { useState } from 'react';
import styled from 'styled-components';
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
                                    <img
                                        src={pic.src}
                                        alt={pic.text}
                                    />
                                </div>
                                <p className='image-text'>{pic.text}</p>
                            </div>
                        </ImageContainer>
                    ))}
                </div>
                <p className='text-intro'> Thanks for stopping by!</p>
                <p>
                    I&apos;m David, a Korean American Software Developer based
                    out of Seoul.
                </p>
                <p>
                    I specialize in the Front End, where I build user-facing
                    applications that work beautifully on the web and mobile
                    devices. All of my projects are built with mobile
                    responsiveness in mind so feel free to check them out with
                    different screen sizes.
                </p>
                <p>
                    I&apos;m always playing around with new technologies and
                    constantly adding new skills to my skillset. These days,
                    I&apos;ve also been exploring the backend more and am
                    working on full stack projects using tools like Next.js,
                    Sanity, Firebase, MongoDB, Node/Express, and GraphQL.
                </p>
            </div>
            <ToolkitContainer>
                <h2>Here are some of the tools I use</h2>
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
    width: 100%;
    background-color: white;
    transition: transform 0.5s ease-out;
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
    margin: 50px 0;
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
        margin: 0 50px 25px 25px;
        cursor: pointer;
        float: left;
        position: relative;

        img {
            width: 100%;
            height: auto;
        }

        @media screen and (max-width: 768px) {
            width: 250px;
            height: 230px;
            margin: auto;
        }
    }

    P {
        font-size: 1.2rem;
    }

    h1,
    h2 {
        color: ${({ theme }) => theme.primary};
        padding: 0 24px;
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

            .text-intro {
                margin-top: 75px;
            }
        }
    }
`;
