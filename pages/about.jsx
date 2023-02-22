import { useState } from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ui/ContactForm';
import { CgArrowLongRight } from 'react-icons/cg';
import Image from 'next/image';

const PROFILE_PICS = [
    {
        src: `/images/pro0.jpg`,
        text: `Exploring Ankor Thom`,
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
    const [drawerActive, setDrawerActive] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    const changeImage = (imageNum) => {
        if (imageNum === PROFILE_PICS.length) {
            setActiveImage(0);
            return;
        }
        setActiveImage(imageNum);
    };

    return (
        <AboutContainer onClick={() => drawerActive && setDrawerActive(false)}>
            <div className='intro'>
                <h1>About Me</h1>
            </div>
            <div className='description'>
                <div className='image-container'>
                    {PROFILE_PICS.map((pic, i) => (
                        <div
                            key={pic.src}
                            className={`profile-image ${
                                activeImage === i && `activeImage`
                            }`}
                            onClick={() => changeImage(i + 1)}
                        >
                            <Image
                                src={pic.src}
                                height={250}
                                width={320}
                                alt={pic.text}
                            />
                        </div>
                    ))}
                    <p className='image-text'>
                        {PROFILE_PICS[activeImage].text}
                    </p>
                </div>
                <p className='greeting'>
                    Hi, I&apos;m <span>David</span>
                </p>
                <p>
                    I&apos;m a Software Developer based out of Seoul, South
                    Korea. I love traveling, watching NBA highlights, being a
                    cat dad, and writing code.
                </p>
                <p>
                    I spend most of my days striving to build great apps and
                    learning cool new things about coding/life in general. I
                    enjoy the challenge of discovering new ways to improve my
                    coding/design skills and tackling difficult problems.
                </p>
                <p>
                    When I&apos;m not coding or studying, you can usually find
                    me running around the house to entertain my cat, playing
                    games with my wife on steam/battlenet, or on the prowl for
                    the best Mexican food in town.
                </p>
                <p>
                    I&apos;m always interested in hearing from my visitors so
                    feel free to send me a message and I&apos;ll get back to you
                    as soon as I can.
                </p>
            </div>

            <ContactForm />
            <DrawerButton onClick={() => setDrawerActive(true)}>
                <p>Things I know</p>
                <CgArrowLongRight size={35} />
            </DrawerButton>

            <div className={`funfacts ${drawerActive ? 'active' : ''}`}>
                <div className='category'>
                    <h2>FRONT END</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>React</li>
                        <li>Material UI</li>
                        <li>Next.js</li>
                        <li>Redux/Zustand/Recoil</li>
                        <li>Styled Components</li>
                        <li>Tailwind</li>
                        <li>GraphQL</li>
                        <li>Jest / RTL</li>
                    </ul>
                    <h2>BACKEND</h2>
                    <ul>
                        <li>Node/Express</li>
                        <li>REST</li>
                        <li>Sanity</li>
                        <li>Firebase</li>
                    </ul>
                    <h2>DATABASE</h2>
                    <ul>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                    </ul>
                    <h2>Mobile</h2>
                    <ul>
                        <li>React Native/Expo</li>
                        <li>Cordova</li>
                    </ul>
                    <h2>WORKFLOW</h2>
                    <ul>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Bitbucket</li>
                        <li>Jira</li>
                        <li>Agile/Scrum</li>
                    </ul>
                </div>
            </div>
        </AboutContainer>
    );
};

export default About;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    h1 {
        font-family: cursive;
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

    .image-container {
        padding: 10px;
        box-shadow: 2px 2px 10px #000;
        background-color: white;
        transform: rotate(4deg);
        width: 320px;
        height: 300px;
        float: left;
        margin: 0 35px 25px 20px;
        cursor: pointer;
        p {
            font-family: 'Indie Flower', cursive;
            font-weight: 600;
            text-align: center;
            color: #000;
        }
        @media screen and (max-width: 768px) {
            float: none;
            width: 250px;
            height: 230px;
            margin: 0;

            p {
                margin: 0;
            }
        }
    }

    .profile-image {
        position: relative;
        display: none;
    }

    .activeImage {
        display: block;
    }

    .funfacts {
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.sidebar};
        color: white;
        font-size: 1rem;
        padding: 10px 10px 20px;
        height: 100%;
        z-index: 100;
        transition: transform 0.5s ease;
        transform: translateX(100%);

        &.active {
            transform: translateX(0%);
        }

        h2 {
            font-size: 1rem;
            margin: 10px 0px 5px;
            border-bottom: 1px solid ${({ theme }) => theme.light};
        }

        h1 {
            font-size: 2.5rem;
            text-align: center;
        }

        ul {
            margin-left: 5px;
            margin-bottom: 5px;
        }

        .category {
            width: 230px;
            padding: 20px;
        }
        @media screen and (max-width: 768px) {
            padding: 10px 0;
            font-size: 0.85rem;

            .category {
                padding: 5px 15px;
            }
        }
    }

    @media screen and (max-width: 990px) {
        margin: 0;
        grid-template-columns: 1fr;
    }
`;

const DrawerButton = styled.div`
    position: absolute;
    display: ${(props) => (props.drawerActive ? 'none' : 'block')};
    top: 75px;
    right: 20px;
    width: 75px;
    height: 75px;
    z-index: 99;
    color: ${({ theme }) => theme.primary};

    @media screen and(max-width: 990px) {
        top: 25px;
    }

    :hover {
        cursor: pointer;
    }
`;
