import styled from 'styled-components';
import Toolkit from '../ui/Toolkit';

const About = () => {
    return (
        <AboutContainer id='about'>
            <div className='description-section'>
                <div className='description'>
                    <h2>About Me</h2>
                    <p>
                        I&apos;m a Korean American Software Engineer based out
                        of Seoul.
                    </p>
                    <p>
                        I specialize in the Front End, where I build user-facing
                        applications that work beautifully on the web and mobile
                        devices. All of my projects are built with mobile
                        responsiveness in mind so feel free to check them out
                        with different screen sizes.
                    </p>
                    <p>
                        I love spending my time in the world of CSS and
                        Javascript and can easily get lost in it for days. In
                        the outside world, you will find me from time to time,
                        getting a few shots up on the basketball court, playing
                        Overwatch/PUBG with my wife, or on the prowl for the
                        best taco in town.
                    </p>
                </div>
            </div>

            <ToolkitContainer>
                <h2 className='tools'>My Toolbox</h2>
                <Toolkit />
            </ToolkitContainer>
        </AboutContainer>
    );
};

export default About;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    color: white;
    justify-content: center;
    transition: all 0.5s ease;
    background-color: ${({ theme }) => theme.light};

    .description-section {
        justify-content: center;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 20px;

        .description {
            max-width: 767px;
        }

        h2 {
            text-align: center;
            padding: 20px;
        }

        p {
            padding: 16px;
        }
    }

    P {
        font-size: 1.2rem;
    }
`;

const ToolkitContainer = styled.div`
    width: 100%;
    margin: 30px 0 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .tools {
        padding: 20px;
    }
`;
