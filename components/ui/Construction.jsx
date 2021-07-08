import styled from "styled-components"
import Image from "next/image"

const Construction = () => {
    return (
        <Container>
            <h2>Section Under Development</h2>
            <p>Thank you for taking the time to browse through my website.  This section is currently being developed and will be up shortly.  Here's a picture of Miru to keep you company while you wait!</p>
            <Image src="/images/miru.jpg" alt="picture of Miru, my cat" width={450} height={338}/>
        </Container>
    )
}

export default Construction

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: ${({theme}) => theme.primary};

    h2 {
        margin: 20px;
    }

    img {
        width: 100%;
        max-width: 450px;
        margin: 20px;
    }
`