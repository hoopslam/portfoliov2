import styled from 'styled-components';
import { PROJECTS } from '../../util/constants';
import Fade from 'react-reveal/Fade';
import ProjectCard from '../ui/ProjectCard';

const HomeProjects = () => {
    return (
        <ProjectsSectionContainer>
            <Fade>
                <h1>Here are some of my projects</h1>
            </Fade>
            <ProjectsContainer id='projects'>
                {PROJECTS.map((project) => (
                    <Fade
                        fraction={0.5}
                        key={project.id}
                    >
                        <ProjectCard project={project} />
                    </Fade>
                ))}
            </ProjectsContainer>
        </ProjectsSectionContainer>
    );
};

export default HomeProjects;

const ProjectsSectionContainer = styled.div`
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* * {
        outline: 1px solid red;
    } */

    h1 {
        color: ${({ theme }) => theme.primary};
        text-align: center;
    }

    a {
        text-decoration: underline
            ${({ theme }) =>
                theme.primary === '#263238' ? '#fff' : theme.primary};
        font-weight: bold;
    }

    @media screen and (max-width: 990px) {
        padding: 24px;
    }
`;

const ProjectsContainer = styled.section`
    margin-top: 40px;
    display: grid;
    gap: 64px;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 40px;
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
        theme.primary === '#00ff37' ? '#000' : ''};

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
