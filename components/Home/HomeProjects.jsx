import { useState } from 'react';
import styled from 'styled-components';
import { PROJECTS } from '../../util/constants';
import Fade from 'react-reveal/Fade';
import ProjectCard from '../ui/ProjectCard';

const HomeProjects = () => {
    const [activeCardNumber, setActiveCardNumber] = useState(null);

    const handleCardClick = (index) => {
        if (activeCardNumber === index) {
            setActiveCardNumber(null);
            return;
        }
        setActiveCardNumber(index);
    };

    return (
        <ProjectsSectionContainer>
            <Fade>
                <h1>Here are some of my projects</h1>
            </Fade>
            <ProjectsContainer id='projects'>
                {PROJECTS.map((project, i) => (
                    <Fade
                        fraction={0.5}
                        key={project.id}
                    >
                        <ProjectCard
                            project={project}
                            isActive={activeCardNumber === i}
                            onClick={() => handleCardClick(i)}
                        />
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
