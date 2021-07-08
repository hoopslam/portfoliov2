import styled from "styled-components";
import Link from "next/link";
import Toolkit from "../ui/Toolkit";

const HomeAbout = () => {
	return (
		<AboutContainer id="about">
			<h1>About Me</h1>
			<p>
				I'm a developer with a passion for making things, be it web apps, homemade kimchi,
				or cardboard box castles for my cat. Whatever the endeavor, I genuinely enjoy the
				challenge of putting small pieces together to create a beautiful and cohesive
				product.
			</p>
			<p>
				When building web apps, I mainly use React to build out the front end. I've recently
				been using Next.js with styled components and am loving it! For the back end,
				Firebase has been my JAM but I can also use a bit of Node, Express, MongoDB and
				PostgreSQL.
			</p>
			<p>
				Outside of coding, I love spending time with my fiancee and our cat, Miru 😸. I
				follow my basketball religiously (let's go Clippers!) and unwind in the evenings
				with a bit of Overwatch, PUBG, or Civ.
			</p>

            <h1>My Toolkit</h1>
            <Toolkit />
		</AboutContainer>
	);
};

export default HomeAbout;

const AboutContainer = styled.section`
    width: 100%;
    padding: 20px;

    h1 {
        color: ${({theme})=> theme.primary};
        margin: 20px;
    }

    p {
        margin: 20px;
    }

    a {
        text-decoration: underline ${({theme}) => theme.primary};
        font-weight: bold;
    }

    @media screen and (max-width: 990px) {
        max-width: 600px;
    }
`;
