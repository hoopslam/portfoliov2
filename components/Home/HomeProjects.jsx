import styled from "styled-components";
import { PROJECTS } from "../../util/constants";
import { FaGithubAlt, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const HomeProjects = () => {
  return (
    <ProjectContainer id="projects">
      <h1>Featured Projects</h1>
      {PROJECTS.map((project) => (
        <Project key={project.id}>
          <LeftContainer>
            <h2>{project.title}</h2>
            <ImageContainer>
              <Image
                src={project.image}
                alt={`Project Image ${project.title}`}
                width={350}
                height={262}
              />
            </ImageContainer>
          </LeftContainer>

          <ProjectDescription>
            <h3>
              Tech: <span>{project.tech}</span>
            </h3>
            <p>{project.description}</p>
            <Links>
              <a href={project.github} target="_blank" rel="noreferrer">
                <StyledButton>
                  Code
                  <FaGithubAlt size={25} className="icon" />
                </StyledButton>
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                <StyledButton>
                  Live
                  <FaExternalLinkAlt size={25} className="icon" />
                </StyledButton>
              </a>
            </Links>
          </ProjectDescription>
        </Project>
      ))}
    </ProjectContainer>
  );
};

export default HomeProjects;

const ProjectContainer = styled.section`
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.primary};
  }

  a {
    text-decoration: underline
      ${({ theme }) => (theme.primary === "#263238" ? "#fff" : theme.primary)};
    font-weight: bold;
  }
`;

const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0;
  box-shadow: 0 1px 5px #333;
  border-radius: 12px;
  background-color: ${({ theme }) =>
    theme.primary === "#00ff37" ? "#000" : ""};

  img {
    width: 350px;
    height: auto;
    object-fit: cover;
  }

  @media screen and (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    max-width: 540px;

    img {
      width: 100%;
      max-width: 450px;
    }
  }
`;

const LeftContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 350px;

  @media screen and (max-width: 990px) {
    min-width: 0;
  }

  h2 {
    font-size: 1.2rem;
    text-align: center;
    margin: 10px;
  }
`;

const ImageContainer = styled.div`
  box-shadow: 0 0 5px #333;
  margin: 12px;
`;

const ProjectDescription = styled.div`
  padding: 2.8rem 1.5rem 0;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1rem;
    margin: 10px 0;
  }

  h3 span {
    color: ${({ theme }) => theme.primary};
  }
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  padding-top: 10px;
  justify-content: space-around;
  align-items: center;

  a {
    padding: 10px;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => (theme.primary === "#00ff37" ? "#000" : "#fff")};
  background-color: ${({ theme }) => theme.primary};
  border: none;
  padding: 5px 10px;
  border-radius: 12px;
  transition: all 0.25s ease;

  .icon {
    margin: 0 5px;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
