import React from 'react';
import styled from 'styled-components';
import { FaGithubAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { StyledButton } from '../../styles/GlobalStyle';
import Image from 'next/image';

function ProjectCard({ project, isActive, onClick }) {
    const { title, image, description, github, live, tech } = project;

    return (
        <ProjectCardContainer
            onClick={onClick}
            overlayActive={isActive}
        >
            <div className='card-front'>
                <Image
                    src={image}
                    alt={`Project Image ${title}`}
                    width={350}
                    height={262}
                />
            </div>
            <div className='description-overlay'>
                <div className='top-card-container'>
                    <h2>{title}</h2>
                    <div className='tech'>
                        {tech.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </div>
                <p>{description}</p>
                <div className='links'>
                    <a
                        href={github}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <StyledButton>
                            About
                            <FaGithubAlt
                                size={25}
                                className='icon'
                            />
                        </StyledButton>
                    </a>
                    {project?.live && (
                        <a
                            href={live}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <StyledButton>
                                Live Demo
                                <FaExternalLinkAlt
                                    size={25}
                                    className='icon'
                                />
                            </StyledButton>
                        </a>
                    )}
                </div>
            </div>
        </ProjectCardContainer>
    );
}

export default ProjectCard;

const ProjectCardContainer = styled.div`
    border: 3px solid rgba(196, 202, 206, 0.5);
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 69%) 0px 4px 24px -12px;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    overflow: hidden; //hide image container corner
    position: relative;
    height: 300px;

    .top-card-container {
        padding: 0 12px;
    }

    .description-overlay {
        position: absolute;
        top: ${({ overlayActive }) => (overlayActive ? `0%` : `80%`)};
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme, overlayActive }) =>
            overlayActive ? `${theme.light}ee` : theme.light};
        color: white;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 2;

        .tech {
            display: flex;
            flex-wrap: wrap;

            span {
                margin: 0 8px;
                font-weight: 900;
            }
        }

        h2 {
            text-align: center;
            margin-bottom: 16px;
        }

        p {
            padding: 12px;
        }
    }

    .links {
        display: flex;
        justify-content: space-evenly;

        a {
            text-decoration: none;
        }
    }

    :hover {
        box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: ${({ theme }) => theme.primary};
    }
`;
