import styled from 'styled-components';
import ContactForm from '../ui/ContactForm';
import Fade from 'react-reveal/Fade';

const HomeContact = () => {
    return (
        <Container>
            <div>
                <Fade>
                    <h1>Want to reach me?</h1>
                </Fade>
                <Fade>
                    <p>Send me a message and I&apos;ll get back to you ASAP!</p>
                </Fade>
            </div>
            <Fade fraction={0.5}>
                <ContactForm />
            </Fade>
        </Container>
    );
};

export default HomeContact;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 70vh;
    margin-top: 100px;

    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 16px;
    }

    h1 {
        margin-bottom: 30px;
        color: ${({ theme }) => theme.primary};
    }

    p {
        max-width: 400px;
    }
`;
