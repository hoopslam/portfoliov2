import styled from 'styled-components';
import HomeAbout from '../components/Home/HomeAbout';
import HomeHeader from '../components/Home/HomeHeader';
import HomeProjects from '../components/Home/HomeProjects';
import HomeContact from '../components/Home/HomeContact';

export default function Home({ selectedTheme, themeHandler }) {
    return (
        <HomeContainer>
            <HomeHeader
                selectedTheme={selectedTheme}
                themeHandler={themeHandler}
            />
            <HomeAbout />
            <HomeProjects />
            <HomeContact />
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-left: 110px;

    @media screen and (max-width: 990px) {
        padding-left: 0;
    }
`;
