import { useState } from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { MdTagFaces } from 'react-icons/md';
import { BsBriefcase, BsCodeSlash } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import Link from 'next/link';
import Drawer from '../ui/Drawer';
import { scrollToTop } from '../../util/utilfunctions';
import { COLORS } from '../../util/constants';

const Navbar = ({ themeHandler, selectedTheme }) => {
    const [active, setActive] = useState(false);
    const [drawerActive, setDrawerActive] = useState(false);

    const menuToggler = () => {
        setActive(!active);
    };

    return (
        <>
            <NavbarContainer className={`${active ? 'active' : ''}`}>
                <Logo>DC</Logo>
                <MenuList>
                    <Link
                        href='/'
                        passHref
                    >
                        <a
                            onClick={() => {
                                scrollToTop();
                                menuToggler();
                            }}
                        >
                            <ListItem>
                                <div
                                    className='centeredIcon'
                                    aria-label='Home Link'
                                >
                                    <FaHome
                                        className='icon'
                                        size={25}
                                        alt='Home Icon'
                                    />
                                    <span>Home</span>
                                </div>
                            </ListItem>
                        </a>
                    </Link>

                    <Link
                        href='/#about'
                        passHref
                    >
                        <a onClick={menuToggler}>
                            <ListItem>
                                <div
                                    className='centeredIcon'
                                    aria-label='About Link'
                                >
                                    <MdTagFaces
                                        className='icon'
                                        size={25}
                                        alt='About Icon'
                                    />
                                    <span>About</span>
                                </div>
                            </ListItem>
                        </a>
                    </Link>
                    <ListItem
                        onClick={() => {
                            setDrawerActive((prev) => !prev);
                            menuToggler();
                        }}
                    >
                        <div
                            className='centeredIcon'
                            aria-label='Contact Link'
                        >
                            <BsCodeSlash
                                className='icon'
                                size={25}
                                alt='Contact Icon'
                            />
                            <span>Skills</span>
                        </div>
                    </ListItem>

                    <Link
                        href='/#projects'
                        passHref
                    >
                        <a onClick={menuToggler}>
                            <ListItem>
                                <div
                                    className='centeredIcon'
                                    aria-label='Projects Link'
                                >
                                    <BsBriefcase
                                        className='icon'
                                        size={25}
                                        alt='Projects Icon'
                                    />
                                    <span>Projects</span>
                                </div>
                            </ListItem>
                        </a>
                    </Link>
                    <Link
                        href='/#contact'
                        passHref
                    >
                        <a onClick={menuToggler}>
                            <ListItem>
                                <div
                                    className='centeredIcon'
                                    aria-label='Contact Link'
                                >
                                    <BiMessageDetail
                                        className='icon'
                                        size={25}
                                        alt='Contact Icon'
                                    />
                                    <span>Contact</span>
                                </div>
                            </ListItem>
                        </a>
                    </Link>
                </MenuList>
            </NavbarContainer>
            <ColorPicker>
                {COLORS.map((color, i) => (
                    <button
                        key={color.id}
                        onClick={() => themeHandler(color.id)}
                        style={{
                            backgroundColor: `${color.hex}`,
                            transform: `${
                                selectedTheme === i ? `scale(1.4)` : ''
                            }`,
                        }}
                        aria-label='color-picker-button'
                    ></button>
                ))}
            </ColorPicker>
            <Hamburger
                onClick={menuToggler}
                aria-label='hamburger menu'
            >
                <div className={`bar top ${active ? 'active' : ''}`}></div>
                <div className={`bar middle ${active ? 'active' : ''}`}></div>
                <div className={`bar bottom ${active ? 'active' : ''}`}></div>
            </Hamburger>
            <Drawer
                drawerActive={drawerActive}
                closeDrawer={() => setDrawerActive(false)}
            />
        </>
    );
};

export default Navbar;

const NavbarContainer = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 110px;
    left: 0;
    background-color: ${({ theme }) => theme.sidebar};
    color: white;
    transition: all 0.5s ease;
    z-index: 100;

    .icon {
        position: absolute;
        left: 30px;
    }

    span {
        display: none;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        left: 70px;
        font-size: 1.1rem;
    }

    :hover {
        width: 220px;
    }

    :hover span {
        display: inline;
        visibility: visible;
        opacity: 1;
    }

    .centeredIcon {
        display: flex;
        align-items: center;
        position: relative;
        top: 50%;
    }

    @media screen and (max-width: 990px) {
        width: 100%;
        max-width: 220px;
        left: -100%;

        span {
            display: inline;
            visibility: visible;
            opacity: 1;
        }

        &.active {
            left: 0;
        }
    }
`;

const ListItem = styled.div`
    height: 50px;
    border-radius: 12px;
    margin-top: 10px;
    :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.light};
    }
`;

const MenuList = styled.div`
    width: 80%;
    text-align: center;
`;

const Logo = styled.div`
    font-family: 'Yellowtail', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background-color: ${({ theme }) => theme.dark};
`;

const Hamburger = styled.button`
    display: none;
    position: fixed;
    top: 10px;
    left: 10px;
    width: 35px;
    height: 35px;
    cursor: pointer;
    appearance: none;
    background: none;
    border: none;
    outline: none;
    z-index: 100;

    .bar {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: rgb(160, 160, 160);
        margin: 5px 0px;
        transition: 0.6s;
    }

    .bar.active {
        background-color: white;
    }

    .bar.top.active {
        transform: rotate(45deg) translate(6px, 5px);
    }

    .bar.middle.active {
        transform: rotate(135deg);
    }

    .bar.bottom.active {
        transform: rotate(135deg) translate(-6px, 6px);
    }

    @media screen and (max-width: 990px) {
        display: block;
    }
`;

const ColorPicker = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;

    @media screen and (max-width: 600px) {
        display: none;
    }

    button {
        cursor: pointer;
        width: 16px;
        margin: 4px;
        height: 16px;
        border: none;
        box-shadow: 1px 1px 3px #000;
        border-radius: 50%;
        transition: all 0.2s;

        :hover {
            transform: scale(1.4);
        }
    }
`;
