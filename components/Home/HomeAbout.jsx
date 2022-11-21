import styled from 'styled-components';
import Toolkit from '../ui/Toolkit';
import Fade from 'react-reveal/Fade';
import Slider from '../ui/Slider';
import { PROJECTS } from '../../util/constants';

const HomeAbout = () => {
    return (
        <AboutContainer id='about'>
            <Fade>
                <h1>I build responsive web apps</h1>
            </Fade>
            <SliderContainer>
                <DesktopContainer>
                    <Slider images={PROJECTS.map((project) => project.image)} />
                    <Stand />
                    <Base />
                </DesktopContainer>
                <MobileContainer>
                    <Slider
                        images={PROJECTS.map((project) => project.mobile)}
                        mobile={true}
                    />
                </MobileContainer>
            </SliderContainer>
            <Fade fraction={0.5}>
                <ToolkitContainer>
                    <h2>using the latest and greatest in tech</h2>
                    <Toolkit />
                </ToolkitContainer>
            </Fade>
        </AboutContainer>
    );
};

export default HomeAbout;

const AboutContainer = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1,
    h2 {
        color: ${({ theme }) => theme.primary};
        margin: 50px;
    }

    p {
        margin: 20px;
    }

    a {
        text-decoration: underline ${({ theme }) => theme.primary};
        font-weight: bold;
    }

    @media screen and (max-width: 990px) {
        max-width: 600px;
    }
`;

const DesktopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 20px 20px 0px;
`;

const Stand = styled.div`
    position: relative;
    top: 0px;
    width: 50px;
    height: 50px;
    background-color: black;
`;

const Base = styled.div`
    position: relative;
    top: -18px;
    width: 200px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
`;

const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 990px) {
        flex-direction: column;
    }
`;

const ToolkitContainer = styled.div`
    width: 100%;
    min-width: 600px;
    margin: 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 990px) {
        min-width: 350px;
    }
`;

const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 20px 20px 0px;
`;
