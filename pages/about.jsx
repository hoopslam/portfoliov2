import styled from "styled-components";

const about = () => {
  return (
    <AboutContainer>
      <div className="title">
        <div className="textblock">
          <h1>
            About <span>Me</span>
          </h1>
        </div>

        <hr />
      </div>

      <div className="intro">
        <div className="image-container">
          <img
            className="profile-image"
            src="/images/profile2.jpg"
            alt="David Cho profile pic"
          />
        </div>
        <p>
          Hi, I&apos;m <span>David</span> and I&apos;m a web developer, hooper,
          gamer, and cat dad.
        </p>
      </div>
      <p>
        When developing, I leverage modern libraries like Gatsby &#38; Next.js
        to deliver blazing fast, mobile-friendly, interactive web apps that
        adhere to modern web standards.
      </p>
      <p>
        When I&apos;m not coding or learning, you can usually find me cradling
        my furbaby (Miru), playing games on steam / battlenet, or on the prowl
        for the best burrito in town.
      </p>
      <p>
        If you&apos;re interested in working with me or have any questions, feel
        free to reach me at <span>hoopslam@gmail.com</span> and I&apos;ll get
        back to you posthaste!
      </p>
      {/* <FunFacts>
        <Cat>
          <h2>Tech Stack</h2>
          <ul>
            <li>HTML</li>
            <li>CSS / SASS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React, Next.js</li>
            <li>Redux / MobX</li>
            <li>Node / Express</li>
            <li>REST APIS</li>
            <li>Firebase</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Socket.io</li>
          </ul>
        </Cat>
        <Cat>
          <h2>Languages</h2>
          <ul>
            <li>English: Fluent </li>
            <li>Korean: Proficient</li>
            <li>Spanish: Beginner</li>
          </ul>
        </Cat>
        <Cat>
          <h2>Availability</h2>
          <ul>
            <li>Available for hire</li>
            <li>Current Location: Korea</li>
            <li>Nationality: USA</li>
            <li>Willing to Relocate: Yes</li>
          </ul>
        </Cat>
        <Cat>
          <h2>Education</h2>
          <ul>
            <li>University of California, Davis</li>
            <li>BA in Organizational Studies</li>
            <li>Graduated in 2009</li>
          </ul>
        </Cat>
      </FunFacts> */}
    </AboutContainer>
  );
};

export default about;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  align-items: flex-start;
  justify-items: center;

  P {
    font-size: 1.3rem;
  }

  .title {
    margin: 100px 0 50px;
    position: relative;
    width: 100%;
    text-align: center;

    .textblock {
      background-color: black;
    }

    span {
      color: ${({ theme }) => theme.primary};
    }

    hr {
      position: absolute;
      width: 100%;
      top: 20px;
      z-index: -1;
    }
  }

  .intro {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 10px;

      span {
        color: ${({ theme }) => theme.primary};
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  }

  .image-container {
    padding: 10px;
    box-shadow: 2px 2px 10px #000;

    img {
      width: 350px;
      height: auto;
    }
  }

  @media screen and (max-width: 990px) {
    margin: 0;
    grid-template-columns: 1fr;
  }
`;

const FunFacts = styled.section`
  position: absolute;
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
  height: 100%;
  min-height: 100vh;

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

  @media screen and (max-width: 990px) {
    width: 100%;
    padding: 30px;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;

    h1 {
      margin-top: 20px;
    }
  }
`;

const Cat = styled.div`
  width: 230px;
  padding: 10px;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 250px;
  height: auto;
  margin: 25px;
`;
