import styled from "styled-components";

const about = () => {
  return (
    <AboutContainer>
      <About>
        <Quote>
          <q>Work hard, be kind, and amazing things will happen.</q>
          <p>~ Conan O&apos;Brien</p>
        </Quote>

        <p>
          Hi, I&apos;m David Cho. I&apos;m a web developer based out of Seoul. I
          love making things, be it web apps, homemade kimchi, or cardboard box
          castles for my cat, Miru. Whatever the endeavor, I genuinely enjoy the
          challenge of putting small pieces together to create a beautiful and
          cohesive creation.
        </p>
        <p>
          Originally from Southern California, I moved to Korea shortly after
          graduating from UC Davis to travel the world and learn more about my
          Korean heritage. After years of working in the English education
          industry, I hung up my teaching hat in 2020, right as the pandemic
          struck. While the world was being engulfed by Covid-19, I was at home,
          studying Javascript, OOP, functional programming, and other core CS
          competencies.
        </p>
        <p>
          Nowadays, I build modern web apps using technologies like React and
          Typescript. Meanwhile, the learning hasn&apos;t stopped and I enjoy
          adding new skills to my developer toolbox every day. You&apos;ll
          usually find me in front of Visual Studio Code but when I&apos;m not
          coding, I enjoy playing a few rounds of Overwatch or watching some NBA
          highlights.
        </p>
      </About>
      <FunFacts>
        <ImageContainer>
          <ProfileImg src="/images/profile.jpg" alt="David Cho profile pic" />
        </ImageContainer>
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
            <li>Currently available for hire</li>
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
      </FunFacts>
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

  @media screen and (max-width: 990px) {
    margin: 0;
    grid-template-columns: 1fr;
  }
`;

const About = styled.section`
  margin-top: 50px;
  padding: 10px;
  width: 100%;
  max-width: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 10px 50px;
  }
`;

const Quote = styled.div`
  font-size: 2.3rem;
  font-family: "Yellowtail", cursive;
  padding: 20px;

  p {
    font-size: 1.5rem;
    text-align: right;
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
  width: 200px;
  height: 200px;
  margin: 25px;
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
`;
