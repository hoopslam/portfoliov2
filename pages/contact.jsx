import styled from "styled-components";

const contact = () => {
  return (
    <Container>
      <div>
        <h1>Drop me a Line!</h1>
        <p>
          Want to get a hold of me? Send me a message and I'll get back to you
          posthaste!
        </p>
      </div>
    </Container>
  );
};

export default contact;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;
`;
