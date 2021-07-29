import styled from "styled-components";

const index = () => {
    return (
        <ProjectsContainer>
            Projects
        </ProjectsContainer>
    )
}

export default index

const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`