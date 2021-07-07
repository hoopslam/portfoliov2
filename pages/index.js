import styled from "styled-components";
import HomeAbout from "../components/Home/HomeAbout";
import HomeHeader from "../components/Home/HomeHeader";
import HomeProjects from "../components/Home/HomeProjects";
import ContactForm from "../components/ui/ContactForm";

export default function Home({themeHandler}) {
  return (
    <HomeContainer>
      <HomeHeader themeHandler={themeHandler}/>
      <HomeAbout />
      <HomeProjects />
      <ContactForm />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100%;
`