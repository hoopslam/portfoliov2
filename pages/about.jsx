import styled from "styled-components";

const about = () => {
    return (
        <AboutContainer>
            <h1>About Me</h1>
        </AboutContainer>
    )
}

export default about

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;

    h1 {
        width: 100%;

    }
`