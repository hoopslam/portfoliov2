import styled from "styled-components";
import HomeAbout from "../components/Home/HomeAbout";
import HomeHeader from "../components/Home/HomeHeader";
import HomeProjects from "../components/Home/HomeProjects";

export default function Home({selectedTheme, themeHandler}) {
  return (
    <HomeContainer>
      <HomeHeader selectedTheme={selectedTheme} themeHandler={themeHandler}/>
      <HomeAbout />
      <HomeProjects />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100%;
`