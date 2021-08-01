import styled from "styled-components";
import {FaGithubAlt, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

const SocialLinks = () => {
    return (
        <Container>
            <a href="https://www.github.com/hoopslam" target="_blank" rel="noreferrer"><FaGithubAlt size={25} alt="Github Icon"/></a>
            <a href="https://www.linkedin.com/in/david-cho-818aa7171/" target="_blank" rel="noreferrer"><FaLinkedin size={25} alt="LinkedIn Icon"/></a>
            <a href="mailto: hoopslam@gmail.com"><HiOutlineMail size={25} alt="Email Icon"/></a>
        </Container>
    )
}

export default SocialLinks

const Container = styled.div`
    display: flex;
    margin: 10px 0 20px;

    a {
        margin-left: 25px;
        padding: 5px 5px 0;
        transition: all .2s ease;
        color: ${({ theme }) => theme.primary};
    }

    a:hover {
        transform: translateY(-4px) scale(1.3);
    }
`