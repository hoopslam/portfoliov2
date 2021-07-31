import styled from "styled-components";
import { useState } from "react";
import { StyledButton } from "../../styles/GlobalStyle";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    try {
      const res = await (
        await fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
      ).json();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormContainer>
      <InputGroup>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          row="10"
          col="40"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        />
      </InputGroup>
      <InputGroup>
        <StyledButton onClick={(e) => handleSubmit(e)}>
          Send Message
        </StyledButton>
      </InputGroup>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  margin: 30px;
  min-width: 420px;

  @media screen and (max-width: 560px) {
    min-width: 0;
    width: 100%;
  }
`;

const InputGroup = styled.div`
  margin: 10px;
  input,
  textarea {
    width: 100%;
    background-color: whitesmoke;
    border: none;
    border-radius: 12px;
    outline: none;
    padding: 5px;
    margin-top: 5px;

    :focus {
      border: 1px solid ${({ theme }) => theme.primary};
    }
  }

  input {
    height: 40px;
  }

  textarea {
    height: 80px;
  }
`;
