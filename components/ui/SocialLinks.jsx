import styled from "styled-components";
import {FaGithubAlt, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

const SocialLinks = () => {
    return (
        <Container>
            <a href="https://www.github.com/hoopslam" target="_blank" rel="noreferrer"><FaGithubAlt size={25}/></a>
            <a href="https://www.linkedin.com/in/david-cho-818aa7171/" target="_blank" rel="noreferrer"><FaLinkedin size={25}/></a>
            <a href="mailto: hoopslam@gmail.com"><HiOutlineMail size={25}/></a>
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
    }

    a:hover {
        box-shadow: 0 0 10px #333;
        background-color: #333;
        color: white;
        border-radius: 5px;

    }
`