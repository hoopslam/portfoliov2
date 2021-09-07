import { useState } from "react";
import styled from "styled-components";
import ContactForm from "../components/ui/ContactForm";
import {CgArrowLongRight} from "react-icons/cg";

const About = () => {
  const [drawerActive, setDrawerActive] = useState(false);

  const toggleActive = (action) => {
    if (action) {
      setDrawerActive(true);
    } else {
      setDrawerActive(false);
    }
  };

  return (
    <AboutContainer onClick={() => drawerActive && toggleActive(false)}>
      <div className="intro">
        <h1>About Me</h1>
      </div>
      <div className="description">
        <div className="image-container">
          <img
            className="profile-image"
            src="/images/profile2.jpg"
            alt="David Cho profile pic"
          />
          <p>Miru and David 2021</p>
        </div>
        <p className="greeting">
          Hi, I&apos;m <span>David</span>
        </p>
        <p>
          I&apos;m a web developer based out of Seoul, South Korea. I love rainy
          weather, watching NBA highlights, being a cat dad, and building awesome
          web apps.
        </p>
        <p>
          I spend most of my days striving to write clean code and building UI components
          that fit and work well. I&apos;m all about simplicity in life; I like
          my coffee black and my functions pure. The world of software
          development isn&apos;t always so simple but I enjoy discovering new
          ways to improve my coding/design skills and the challenge of making
          things as elegant as possible.
        </p>
        <p>
          When I&apos;m not coding or studying, you can usually find me running
          around the house to entertain my furbaby (Miru), playing games with my
          fiancée on steam/battlenet, or on the prowl for the best Mexican food
          in town.
        </p>
        <p>
          I&apos;m always interested in hearing from my visitors so feel free to
          send me a message and I&apos;ll get back to you as soon as I can.
        </p>
      </div>

      <ContactForm />
      <DrawerButton onClick={() => toggleActive(true)}><p>Things I know</p><CgArrowLongRight size={35} /></DrawerButton>     

      <div className={`funfacts ${drawerActive ? "active" : ""}`}>
        <div className="category">
          <h2>Tech Stack</h2>
          <ul>
            <li>HTML</li>
            <li>CSS / SASS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>MobX</li>
            <li>Styled Components</li>
            <li>Node / Express</li>
            <li>REST APIS</li>
            <li>Firebase</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="category">
          <h2>Languages</h2>
          <ul>
            <li>English: Native </li>
            <li>Korean: Proficient</li>
            <li>Spanish: Beginner</li>
          </ul>
        </div>
        <div className="category">
          <h2>Education</h2>
          <ul>
            <li>University of California, Davis</li>
            <li>BA in Organizational Studies</li>
            <li>Graduated in 2009</li>
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
      margin: 10px;
    }

    @media screen and (max-width: 767px) {
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
    float: left;
    margin: 0 35px 25px 20px;

    img {
      width: 100%;
      height: auto;
    }

    p {
      font-family: "Indie Flower", cursive;
      font-weight: 600;
      text-align: center;
      color: #000;
    }
    @media screen and (max-width: 767px) {
      float: none;
    }
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
    font-size: 0.85rem;
    padding: 10px 10px 20px;
    height: 100vh;
    z-index: 100;
    transition: transform 0.5s ease;
    transform: translateX(100%);

    &.active {
      transform: translateX(0%);
    }

    h2 {
      font-size: 1.2rem;
      margin: 10px 0px 5px;
      border-bottom: 1px solid ${({ theme }) => theme.light};
    }

    h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      margin: 5px;
    }

    .category {
      width: 230px;
      padding: 20px;
    }
  }

  @media screen and (max-width: 990px) {
    margin: 0;
    grid-template-columns: 1fr;
  }
`;

const DrawerButton = styled.div`
  position: fixed;
  display: ${props => props.drawerActive ? "none" : "block"};
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 75px;
  height: 75px;
  z-index: 99;
  color: ${({theme}) => theme.primary};

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    top: 10px;
    transform: translateY(0);
  }
`;
