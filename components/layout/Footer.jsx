import styled from 'styled-components';
import Link from 'next/link';
import SocialLinks from '../ui/SocialLinks';

const Footer = () => {
    return (
        <FooterContainer>
            <LinksContainer>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <Link href='/#projects'>
                    <a>Projects</a>
                </Link>
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </LinksContainer>
            <SocialLinks />
            <p>
                &#169; David Cho {new Date().getFullYear()} All rights reserved
            </p>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
    color: ${({ theme }) => (theme.primary === '#00ff37' ? '#fff' : '#333')};

    p {
        margin: 5px;
        padding: 5px;
        font-family: 'Yellowtail', cursive;
    }
`;

const LinksContainer = styled.nav`
    display: flex;
    margin: 15px;
    cursor: pointer;

    a {
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;

        :hover {
            transform: translateY(-4px);
        }
    }

    @media screen and (max-width: 350px) {
        display: block;
        a {
            padding: 8px 15px;

            :hover {
                transform: translateY(0);
            }
        }
    }
`;
