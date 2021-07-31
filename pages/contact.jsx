import styled from "styled-components";
import ContactForm from "../components/ui/ContactForm";

const contact = () => {
  return (
    <Container>
      <div>
        <h1>Contact Me</h1>
        <p>
          I check and respond to every message sent through my website.  Send me a message and I will get back to you as soon as possible!
        </p>
      </div>
      <ContactForm />
    </Container>
  );
};

export default contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;

  h1 {
    margin: 150px 0 30px;
  }

  p {
    max-width: 400px;
  }
`;
