import styled from "styled-components";
import emailjs from "emailjs-com";

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4sqw4cp",
        "template_hx5g5sc",
        e.target,
        "user_XtYyMqV78dTetP6lLHnBA"
      )
      .then(
        (result) => {
          alert("Message Sent!");
        },
        (error) => {
          alert("Woopsie, your message didn't go through.  Please try sending a message via your email client to hoopslam@gmail.com")
        }
      );
    e.target.reset();
  }

  return (
    <FormContainer onSubmit={sendEmail}>
      <InputGroup>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />
      </InputGroup>
      <InputGroup>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required name="email" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" required name="subject" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" row="10" col="40" required />
      </InputGroup>
      <InputGroup>
        <input type="submit" value="Send" className="submit" />
      </InputGroup>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  border-radius: 12px;
  padding: 50px;
  max-width: 440px;

  @media screen and (max-width: 560px) {
    min-width: 0;
  }
`;

const InputGroup = styled.div`
  margin: 10px;
  
  input,
  textarea {
    width: 100%;
    min-width: 320px;
    background-color: whitesmoke;
    border: none;
    border-radius: 12px;
    outline: none;
    padding: 5px;
    margin-top: 5px;

    :focus {
      border: 1px solid ${({ theme }) => theme.primary};
    }

    @media screen and (max-width: 560px) {
      min-width: 0;
    }
  }

  input {
    height: 40px;
  }

  textarea {
    height: 80px;
  }

  .submit {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => (theme.primary === "#00ff37" ? "#000" : "#fff")};
    :hover {
      cursor: pointer;
      background-color: ${({ theme }) =>
        theme.primary === "#00ff37" ? "#00cc00" : theme.dark};
    }
  }
`;
