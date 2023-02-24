import styled from 'styled-components';
import Link from 'next/link';
import SocialLinks from '../ui/SocialLinks';
import { scrollToTop } from '../../util/utilfunctions';

const Footer = () => {
    return (
        <FooterContainer>
            <LinksContainer>
                <Link href='/'>
                    <a onClick={scrollToTop}>Home</a>
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

                <a
                    href='http://ajeossipost.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Blog
                </a>
            </LinksContainer>
            <SocialLinks />
            <p>Made by David Cho &#169; {new Date().getFullYear()}</p>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 15px;
    width: 100%;
    cursor: pointer;

    a {
        padding: 15px;
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
