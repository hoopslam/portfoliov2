import Head from 'next/head'
import styled from "styled-components";
import HomeAbout from "../components/Home/HomeAbout";
import HomeHeader from "../components/Home/HomeHeader";
import HomeProjects from "../components/Home/HomeProjects";

export default function Home() {
  return (
    <HomeContainer>
       <Head>
        <title>David Cho Web Developer</title>
        <meta name="description" content="David Cho's home page.  Web Developer, blogger, cat dad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      <HomeAbout />
      <HomeProjects />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100%;
  background-color: ${({theme}) => {theme.background}};
`