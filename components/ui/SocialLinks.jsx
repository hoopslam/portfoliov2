import styled from "styled-components";
import {FaGithubAlt, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

const SocialLinks = () => {
    return (
        <Container>
            <a href="https://www.github.com/hoopslam" target="_blank"><FaGithubAlt/></a>
            <a href="https://www.linkedin.com/in/david-cho-818aa7171/" target="_blank"><FaLinkedin /></a>
            <a href="mailto: hoopslam@gmail.com"><HiOutlineMail /></a>
        </Container>
    )
}

export default SocialLinks

const Container = styled.div`
    width: 100%;
    display: flex;
`