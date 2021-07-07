import styled from "styled-components";
import Link from "next/link";
import SocialLinks from "../ui/SocialLinks";

const Footer = () => {
    return (
        <FooterContainer>
            <h1>Footer</h1>
            <p>text</p>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/portfolio"><a>Portfolio</a></Link>
            <Link href="/blog/"><a>Blog</a></Link>
            <SocialLinks />
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    width: 100%;
    height: 150px;
    color: rgb(142, 142, 142);
`