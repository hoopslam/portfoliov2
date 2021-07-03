import styled from "styled-components";
import {FaGithubAlt, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

const SocialLinks = () => {
    return (
        <Container>
            <a href="https://www.github.com/hoopslam" target="_blank"><FaGithubAlt size={25}/></a>
            <a href="https://www.linkedin.com/in/david-cho-818aa7171/" target="_blank"><FaLinkedin size={25}/></a>
            <a href="mailto: hoopslam@gmail.com"><HiOutlineMail size={25}/></a>
        </Container>
    )
}

export default SocialLinks

const Container = styled.div`
    width: 100%;
    display: flex;

    a {
        margin-right: 25px;
    }
`