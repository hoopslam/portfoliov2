import styled from "styled-components";

const HomeProjects = () => {
    return (
        <ProjectContainer>
            <h1>Featured Projects</h1>
            <Project>
                Project
            </Project>
        </ProjectContainer>
    )
}

export default HomeProjects

const ProjectContainer = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h1 {
        color: ${({theme})=> theme.primary};
        margin: 20px;
    }

    p {
        margin: 20px;
    }

    a {
        text-decoration: underline ${({theme}) => (theme.primary === "#263238" ? "#fff" : theme.primary)};
        font-weight: bold;
    }

    @media screen and (max-width: 990px) {
        max-width: 600px;
    }
`;

const Project = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`